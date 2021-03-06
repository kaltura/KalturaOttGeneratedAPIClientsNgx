
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCollectionFilterArgs  extends KalturaFilterArgs {
    collectionIdIn? : string;
	mediaFileIdEqual? : number;
	couponGroupIdEqual? : number;
}


export class KalturaCollectionFilter extends KalturaFilter {

    collectionIdIn : string;
	mediaFileIdEqual : number;
	couponGroupIdEqual : number;

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
				couponGroupIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCollectionFilter'] = KalturaCollectionFilter;