
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCampaign } from './KalturaCampaign';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCampaignListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCampaign[];
}


export class KalturaCampaignListResponse extends KalturaListResponse {

    objects : KalturaCampaign[];

    constructor(data? : KalturaCampaignListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCampaign, subType : 'KalturaCampaign' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCampaignListResponse'] = KalturaCampaignListResponse;