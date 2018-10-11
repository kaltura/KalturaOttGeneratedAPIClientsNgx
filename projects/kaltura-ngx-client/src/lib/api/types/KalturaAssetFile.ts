
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetFileArgs  extends KalturaObjectBaseArgs {
    url? : string;
}


export class KalturaAssetFile extends KalturaObjectBase {

    url : string;

    constructor(data? : KalturaAssetFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFile' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetFile'] = KalturaAssetFile;