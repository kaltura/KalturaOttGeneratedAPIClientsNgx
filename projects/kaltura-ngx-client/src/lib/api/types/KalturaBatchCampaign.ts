
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition } from './KalturaCondition';
import { KalturaCampaign, KalturaCampaignArgs } from './KalturaCampaign';

export interface KalturaBatchCampaignArgs  extends KalturaCampaignArgs {
    populationConditions? : KalturaCondition[];
}


export class KalturaBatchCampaign extends KalturaCampaign {

    populationConditions : KalturaCondition[];

    constructor(data? : KalturaBatchCampaignArgs)
    {
        super(data);
        if (typeof this.populationConditions === 'undefined') this.populationConditions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchCampaign' },
				populationConditions : { type : 'a', subTypeConstructor : KalturaCondition, subType : 'KalturaCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBatchCampaign'] = KalturaBatchCampaign;