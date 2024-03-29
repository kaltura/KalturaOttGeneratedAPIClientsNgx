
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaChannelExternalFilterArgs  extends KalturaAssetFilterArgs {
    idEqual? : number;
	utcOffsetEqual? : number;
	freeText? : string;
	alias? : string;
}


export class KalturaChannelExternalFilter extends KalturaAssetFilter {

    idEqual : number;
	utcOffsetEqual : number;
	freeText : string;
	alias : string;

    constructor(data? : KalturaChannelExternalFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelExternalFilter' },
				idEqual : { type : 'n' },
				utcOffsetEqual : { type : 'n' },
				freeText : { type : 's' },
				alias : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaChannelExternalFilter'] = KalturaChannelExternalFilter;