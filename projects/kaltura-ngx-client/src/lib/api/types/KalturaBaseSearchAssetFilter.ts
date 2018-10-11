
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetGroupBy } from './KalturaAssetGroupBy';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaBaseSearchAssetFilterArgs  extends KalturaAssetFilterArgs {
    kSql? : string;
	groupBy? : KalturaAssetGroupBy[];
}


export class KalturaBaseSearchAssetFilter extends KalturaAssetFilter {

    kSql : string;
	groupBy : KalturaAssetGroupBy[];

    constructor(data? : KalturaBaseSearchAssetFilterArgs)
    {
        super(data);
        if (typeof this.groupBy === 'undefined') this.groupBy = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSearchAssetFilter' },
				kSql : { type : 's' },
				groupBy : { type : 'a', subTypeConstructor : KalturaAssetGroupBy, subType : 'KalturaAssetGroupBy' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseSearchAssetFilter'] = KalturaBaseSearchAssetFilter;