
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetaTagOrderBy } from './KalturaMetaTagOrderBy';
import { KalturaBaseAssetOrder, KalturaBaseAssetOrderArgs } from './KalturaBaseAssetOrder';

export interface KalturaAssetDynamicOrderArgs  extends KalturaBaseAssetOrderArgs {
    name? : string;
	orderBy? : KalturaMetaTagOrderBy;
}


export class KalturaAssetDynamicOrder extends KalturaBaseAssetOrder {

    name : string;
	orderBy : KalturaMetaTagOrderBy;

    constructor(data? : KalturaAssetDynamicOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetDynamicOrder' },
				name : { type : 's' },
				orderBy : { type : 'es', subTypeConstructor : KalturaMetaTagOrderBy, subType : 'KalturaMetaTagOrderBy' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetDynamicOrder'] = KalturaAssetDynamicOrder;