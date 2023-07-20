
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVodIngestAssetResultErrorMessageArgs  extends KalturaObjectBaseArgs {
    message? : string;
	code? : string;
}


export class KalturaVodIngestAssetResultErrorMessage extends KalturaObjectBase {

    message : string;
	code : string;

    constructor(data? : KalturaVodIngestAssetResultErrorMessageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVodIngestAssetResultErrorMessage' },
				message : { type : 's' },
				code : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVodIngestAssetResultErrorMessage'] = KalturaVodIngestAssetResultErrorMessage;