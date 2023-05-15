
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCollectionFilterArgs  extends KalturaFilterArgs {
    collectionIdIn? : string;
	mediaFileIdEqual? : number;
	couponGroupIdEqual? : number;
	alsoInactive? : boolean;
	assetUserRuleIdIn? : string;
}


export class KalturaCollectionFilter extends KalturaFilter {

    collectionIdIn : string;
	mediaFileIdEqual : number;
	couponGroupIdEqual : number;
	alsoInactive : boolean;
	assetUserRuleIdIn : string;

    constructor(data? : KalturaCollectionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollectionFilter' },
				collectionIdIn : { type : 's' },
				mediaFileIdEqual : { type : 'n' },
				couponGroupIdEqual : { type : 'n' },
				alsoInactive : { type : 'b' },
				assetUserRuleIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCollectionFilter'] = KalturaCollectionFilter;