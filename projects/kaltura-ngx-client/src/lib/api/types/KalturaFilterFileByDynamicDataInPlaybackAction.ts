
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByDynamicDataAction, KalturaFilterFileByDynamicDataActionArgs } from './KalturaFilterFileByDynamicDataAction';

export interface KalturaFilterFileByDynamicDataInPlaybackActionArgs  extends KalturaFilterFileByDynamicDataActionArgs {
    
}


export class KalturaFilterFileByDynamicDataInPlaybackAction extends KalturaFilterFileByDynamicDataAction {

    

    constructor(data? : KalturaFilterFileByDynamicDataInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByDynamicDataInPlaybackAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByDynamicDataInPlaybackAction'] = KalturaFilterFileByDynamicDataInPlaybackAction;