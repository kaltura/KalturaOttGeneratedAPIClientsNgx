
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileTypeIdForAssetTypeAction, KalturaFilterFileByFileTypeIdForAssetTypeActionArgs } from './KalturaFilterFileByFileTypeIdForAssetTypeAction';

export interface KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackActionArgs  extends KalturaFilterFileByFileTypeIdForAssetTypeActionArgs {
    
}


export class KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackAction extends KalturaFilterFileByFileTypeIdForAssetTypeAction {

    

    constructor(data? : KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackAction'] = KalturaFilterFileByFileTypeIdForAssetTypeInPlaybackAction;