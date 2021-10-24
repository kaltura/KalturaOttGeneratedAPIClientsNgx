
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileTypeIdForAssetTypeAction, KalturaFilterFileByFileTypeIdForAssetTypeActionArgs } from './KalturaFilterFileByFileTypeIdForAssetTypeAction';

export interface KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryActionArgs  extends KalturaFilterFileByFileTypeIdForAssetTypeActionArgs {
    
}


export class KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryAction extends KalturaFilterFileByFileTypeIdForAssetTypeAction {

    

    constructor(data? : KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryAction'] = KalturaFilterFileByFileTypeIdForAssetTypeInDiscoveryAction;