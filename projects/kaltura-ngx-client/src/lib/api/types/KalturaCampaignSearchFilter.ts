
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectState } from './KalturaObjectState';
import { KalturaCampaignFilter, KalturaCampaignFilterArgs } from './KalturaCampaignFilter';

export interface KalturaCampaignSearchFilterArgs  extends KalturaCampaignFilterArgs {
    startDateGreaterThanOrEqual? : number;
	endDateLessThanOrEqual? : number;
	stateEqual? : KalturaObjectState;
	hasPromotion? : boolean;
}


export class KalturaCampaignSearchFilter extends KalturaCampaignFilter {

    startDateGreaterThanOrEqual : number;
	endDateLessThanOrEqual : number;
	stateEqual : KalturaObjectState;
	hasPromotion : boolean;

    constructor(data? : KalturaCampaignSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaignSearchFilter' },
				startDateGreaterThanOrEqual : { type : 'n' },
				endDateLessThanOrEqual : { type : 'n' },
				stateEqual : { type : 'es', subTypeConstructor : KalturaObjectState, subType : 'KalturaObjectState' },
				hasPromotion : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCampaignSearchFilter'] = KalturaCampaignSearchFilter;