
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSegmentAssetFilterAction, KalturaSegmentAssetFilterActionArgs } from './KalturaSegmentAssetFilterAction';

export interface KalturaSegmentAssetFilterSubscriptionActionArgs  extends KalturaSegmentAssetFilterActionArgs {
    
}


export class KalturaSegmentAssetFilterSubscriptionAction extends KalturaSegmentAssetFilterAction {

    

    constructor(data? : KalturaSegmentAssetFilterSubscriptionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentAssetFilterSubscriptionAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegmentAssetFilterSubscriptionAction'] = KalturaSegmentAssetFilterSubscriptionAction;