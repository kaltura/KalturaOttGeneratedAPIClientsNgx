
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaListGroupsRepresentativesFilterArgs  extends KalturaFilterArgs {
    kSql? : string;
}


export class KalturaListGroupsRepresentativesFilter extends KalturaFilter {

    kSql : string;

    constructor(data? : KalturaListGroupsRepresentativesFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaListGroupsRepresentativesFilter' },
				kSql : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaListGroupsRepresentativesFilter'] = KalturaListGroupsRepresentativesFilter;