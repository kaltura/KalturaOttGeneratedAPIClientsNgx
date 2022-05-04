
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCrudFilter, KalturaCrudFilterArgs } from './KalturaCrudFilter';

export interface KalturaHouseholdSegmentFilterArgs  extends KalturaCrudFilterArgs {
    kSql? : string;
}


export class KalturaHouseholdSegmentFilter extends KalturaCrudFilter {

    kSql : string;

    constructor(data? : KalturaHouseholdSegmentFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdSegmentFilter' },
				kSql : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHouseholdSegmentFilter'] = KalturaHouseholdSegmentFilter;