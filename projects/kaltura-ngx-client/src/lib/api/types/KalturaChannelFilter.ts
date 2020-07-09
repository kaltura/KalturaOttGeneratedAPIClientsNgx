
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSearchAssetFilter, KalturaBaseSearchAssetFilterArgs } from './KalturaBaseSearchAssetFilter';

export interface KalturaChannelFilterArgs  extends KalturaBaseSearchAssetFilterArgs {
    idEqual? : number;
	excludeWatched? : boolean;
}


export class KalturaChannelFilter extends KalturaBaseSearchAssetFilter {

    idEqual : number;
	excludeWatched : boolean;

    constructor(data? : KalturaChannelFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelFilter' },
				idEqual : { type : 'n' },
				excludeWatched : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaChannelFilter'] = KalturaChannelFilter;