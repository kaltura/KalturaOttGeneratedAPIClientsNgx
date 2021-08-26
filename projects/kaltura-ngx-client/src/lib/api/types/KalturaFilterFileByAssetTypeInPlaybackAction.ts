
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByAssetTypeAction, KalturaFilterFileByAssetTypeActionArgs } from './KalturaFilterFileByAssetTypeAction';

export interface KalturaFilterFileByAssetTypeInPlaybackActionArgs  extends KalturaFilterFileByAssetTypeActionArgs {
    
}


export class KalturaFilterFileByAssetTypeInPlaybackAction extends KalturaFilterFileByAssetTypeAction {

    

    constructor(data? : KalturaFilterFileByAssetTypeInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAssetTypeInPlaybackAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByAssetTypeInPlaybackAction'] = KalturaFilterFileByAssetTypeInPlaybackAction;