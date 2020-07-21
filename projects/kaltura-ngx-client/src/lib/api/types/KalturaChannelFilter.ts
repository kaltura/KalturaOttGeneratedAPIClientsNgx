
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaChannelFilterArgs  extends KalturaAssetFilterArgs {
    idEqual? : number;
	kSql? : string;
	excludeWatched? : boolean;
}


export class KalturaChannelFilter extends KalturaAssetFilter {

    idEqual : number;
	kSql : string;
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
				kSql : { type : 's' },
				excludeWatched : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaChannelFilter'] = KalturaChannelFilter;