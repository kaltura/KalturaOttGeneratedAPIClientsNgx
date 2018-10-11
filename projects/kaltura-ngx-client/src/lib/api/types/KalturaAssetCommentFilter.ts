
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetCommentFilterArgs  extends KalturaFilterArgs {
    assetIdEqual? : number;
	assetTypeEqual? : KalturaAssetType;
}


export class KalturaAssetCommentFilter extends KalturaFilter {

    assetIdEqual : number;
	assetTypeEqual : KalturaAssetType;

    constructor(data? : KalturaAssetCommentFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetCommentFilter' },
				assetIdEqual : { type : 'n' },
				assetTypeEqual : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetCommentFilter'] = KalturaAssetCommentFilter;