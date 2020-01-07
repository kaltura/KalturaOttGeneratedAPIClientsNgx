
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSegmentAssetFilterAction, KalturaSegmentAssetFilterActionArgs } from './KalturaSegmentAssetFilterAction';

export interface KalturaSegmentAssetFilterSegmentActionArgs  extends KalturaSegmentAssetFilterActionArgs {
    
}


export class KalturaSegmentAssetFilterSegmentAction extends KalturaSegmentAssetFilterAction {

    

    constructor(data? : KalturaSegmentAssetFilterSegmentActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentAssetFilterSegmentAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegmentAssetFilterSegmentAction'] = KalturaSegmentAssetFilterSegmentAction;