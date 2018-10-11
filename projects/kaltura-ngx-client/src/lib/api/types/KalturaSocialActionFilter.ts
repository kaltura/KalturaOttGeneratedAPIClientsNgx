
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSocialActionFilterArgs  extends KalturaFilterArgs {
    assetIdIn? : string;
	assetTypeEqual? : KalturaAssetType;
	actionTypeIn? : string;
}


export class KalturaSocialActionFilter extends KalturaFilter {

    assetIdIn : string;
	assetTypeEqual : KalturaAssetType;
	actionTypeIn : string;

    constructor(data? : KalturaSocialActionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialActionFilter' },
				assetIdIn : { type : 's' },
				assetTypeEqual : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				actionTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSocialActionFilter'] = KalturaSocialActionFilter;