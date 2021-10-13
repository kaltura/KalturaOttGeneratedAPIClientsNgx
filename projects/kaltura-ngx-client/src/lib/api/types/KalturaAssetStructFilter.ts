
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectVirtualAssetInfoType } from './KalturaObjectVirtualAssetInfoType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetStructFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	metaIdEqual? : number;
	isProtectedEqual? : boolean;
	objectVirtualAssetInfoTypeEqual? : KalturaObjectVirtualAssetInfoType;
}


export class KalturaAssetStructFilter extends KalturaFilter {

    idIn : string;
	metaIdEqual : number;
	isProtectedEqual : boolean;
	objectVirtualAssetInfoTypeEqual : KalturaObjectVirtualAssetInfoType;

    constructor(data? : KalturaAssetStructFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStructFilter' },
				idIn : { type : 's' },
				metaIdEqual : { type : 'n' },
				isProtectedEqual : { type : 'b' },
				objectVirtualAssetInfoTypeEqual : { type : 'es', subTypeConstructor : KalturaObjectVirtualAssetInfoType, subType : 'KalturaObjectVirtualAssetInfoType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetStructFilter'] = KalturaAssetStructFilter;