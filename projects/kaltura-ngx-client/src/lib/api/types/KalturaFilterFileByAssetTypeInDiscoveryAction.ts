
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByAssetTypeAction, KalturaFilterFileByAssetTypeActionArgs } from './KalturaFilterFileByAssetTypeAction';

export interface KalturaFilterFileByAssetTypeInDiscoveryActionArgs  extends KalturaFilterFileByAssetTypeActionArgs {
    
}


export class KalturaFilterFileByAssetTypeInDiscoveryAction extends KalturaFilterFileByAssetTypeAction {

    

    constructor(data? : KalturaFilterFileByAssetTypeInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAssetTypeInDiscoveryAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByAssetTypeInDiscoveryAction'] = KalturaFilterFileByAssetTypeInDiscoveryAction;