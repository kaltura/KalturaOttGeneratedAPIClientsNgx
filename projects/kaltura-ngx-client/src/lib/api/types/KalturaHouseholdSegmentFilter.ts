
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaHouseholdSegmentFilterArgs  extends KalturaFilterArgs {
    kSql? : string;
}


export class KalturaHouseholdSegmentFilter extends KalturaFilter {

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