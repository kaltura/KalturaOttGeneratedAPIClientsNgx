
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSegmentAssetFilterAction, KalturaSegmentAssetFilterActionArgs } from './KalturaSegmentAssetFilterAction';

export interface KalturaSegementAssetFilterSubscriptionActionArgs  extends KalturaSegmentAssetFilterActionArgs {
    
}


export class KalturaSegementAssetFilterSubscriptionAction extends KalturaSegmentAssetFilterAction {

    

    constructor(data? : KalturaSegementAssetFilterSubscriptionActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegementAssetFilterSubscriptionAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegementAssetFilterSubscriptionAction'] = KalturaSegementAssetFilterSubscriptionAction;