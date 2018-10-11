
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSlimAssetArgs  extends KalturaObjectBaseArgs {
    id? : string;
	type? : KalturaAssetType;
}


export class KalturaSlimAsset extends KalturaObjectBase {

    id : string;
	type : KalturaAssetType;

    constructor(data? : KalturaSlimAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSlimAsset' },
				id : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSlimAsset'] = KalturaSlimAsset;