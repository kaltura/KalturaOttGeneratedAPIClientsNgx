
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetPersonalSelectionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaAssetPersonalSelection extends KalturaObjectBase {

    readonly assetId : number;
	readonly assetType : KalturaAssetType;
	readonly updateDate : number;

    constructor(data? : KalturaAssetPersonalSelectionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetPersonalSelection' },
				assetId : { type : 'n', readOnly : true },
				assetType : { type : 'es', readOnly : true, subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetPersonalSelection'] = KalturaAssetPersonalSelection;