
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileTypeIdAction, KalturaFilterFileByFileTypeIdActionArgs } from './KalturaFilterFileByFileTypeIdAction';

export interface KalturaFilterFileByFileTypeIdForAssetTypeActionArgs  extends KalturaFilterFileByFileTypeIdActionArgs {
    assetTypeIn? : string;
}


export class KalturaFilterFileByFileTypeIdForAssetTypeAction extends KalturaFilterFileByFileTypeIdAction {

    assetTypeIn : string;

    constructor(data? : KalturaFilterFileByFileTypeIdForAssetTypeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdForAssetTypeAction' },
				assetTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByFileTypeIdForAssetTypeAction'] = KalturaFilterFileByFileTypeIdForAssetTypeAction;