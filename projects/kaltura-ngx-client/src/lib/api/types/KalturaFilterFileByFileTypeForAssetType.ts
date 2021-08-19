
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileType, KalturaFilterFileByFileTypeArgs } from './KalturaFilterFileByFileType';

export interface KalturaFilterFileByFileTypeForAssetTypeArgs  extends KalturaFilterFileByFileTypeArgs {
    assetTypes? : string;
}


export class KalturaFilterFileByFileTypeForAssetType extends KalturaFilterFileByFileType {

    assetTypes : string;

    constructor(data? : KalturaFilterFileByFileTypeForAssetTypeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeForAssetType' },
				assetTypes : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByFileTypeForAssetType'] = KalturaFilterFileByFileTypeForAssetType;