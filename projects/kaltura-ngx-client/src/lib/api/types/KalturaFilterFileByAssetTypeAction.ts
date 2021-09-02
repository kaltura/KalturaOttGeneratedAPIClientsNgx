
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileTypeIdAction, KalturaFilterFileByFileTypeIdActionArgs } from './KalturaFilterFileByFileTypeIdAction';

export interface KalturaFilterFileByAssetTypeActionArgs  extends KalturaFilterFileByFileTypeIdActionArgs {
    assetTypeIn? : string;
}


export class KalturaFilterFileByAssetTypeAction extends KalturaFilterFileByFileTypeIdAction {

    assetTypeIn : string;

    constructor(data? : KalturaFilterFileByAssetTypeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAssetTypeAction' },
				assetTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByAssetTypeAction'] = KalturaFilterFileByAssetTypeAction;