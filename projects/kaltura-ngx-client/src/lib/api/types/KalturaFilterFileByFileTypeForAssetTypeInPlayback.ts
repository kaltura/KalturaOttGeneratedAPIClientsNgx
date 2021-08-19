
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileTypeForAssetType, KalturaFilterFileByFileTypeForAssetTypeArgs } from './KalturaFilterFileByFileTypeForAssetType';

export interface KalturaFilterFileByFileTypeForAssetTypeInPlaybackArgs  extends KalturaFilterFileByFileTypeForAssetTypeArgs {
    
}


export class KalturaFilterFileByFileTypeForAssetTypeInPlayback extends KalturaFilterFileByFileTypeForAssetType {

    

    constructor(data? : KalturaFilterFileByFileTypeForAssetTypeInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeForAssetTypeInPlayback' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByFileTypeForAssetTypeInPlayback'] = KalturaFilterFileByFileTypeForAssetTypeInPlayback;