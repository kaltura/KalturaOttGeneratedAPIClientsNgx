
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSearchAssetFilter, KalturaBaseSearchAssetFilterArgs } from './KalturaBaseSearchAssetFilter';

export interface KalturaRelatedFilterArgs  extends KalturaBaseSearchAssetFilterArgs {
    idEqual? : number;
	typeIn? : string;
	excludeWatched? : boolean;
}


export class KalturaRelatedFilter extends KalturaBaseSearchAssetFilter {

    idEqual : number;
	typeIn : string;
	excludeWatched : boolean;

    constructor(data? : KalturaRelatedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRelatedFilter' },
				idEqual : { type : 'n' },
				typeIn : { type : 's' },
				excludeWatched : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRelatedFilter'] = KalturaRelatedFilter;