
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaSearchExternalFilterArgs  extends KalturaAssetFilterArgs {
    query? : string;
	utcOffsetEqual? : number;
	typeIn? : string;
}


export class KalturaSearchExternalFilter extends KalturaAssetFilter {

    query : string;
	utcOffsetEqual : number;
	typeIn : string;

    constructor(data? : KalturaSearchExternalFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchExternalFilter' },
				query : { type : 's' },
				utcOffsetEqual : { type : 'n' },
				typeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchExternalFilter'] = KalturaSearchExternalFilter;