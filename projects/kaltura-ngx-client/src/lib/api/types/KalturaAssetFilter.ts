
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDynamicOrderBy } from './KalturaDynamicOrderBy';
import { KalturaPersistedFilter, KalturaPersistedFilterArgs } from './KalturaPersistedFilter';

export interface KalturaAssetFilterArgs  extends KalturaPersistedFilterArgs {
    dynamicOrderBy? : KalturaDynamicOrderBy;
}


export class KalturaAssetFilter extends KalturaPersistedFilter {

    dynamicOrderBy : KalturaDynamicOrderBy;

    constructor(data? : KalturaAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFilter' },
				dynamicOrderBy : { type : 'o', subTypeConstructor : KalturaDynamicOrderBy, subType : 'KalturaDynamicOrderBy' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetFilter'] = KalturaAssetFilter;