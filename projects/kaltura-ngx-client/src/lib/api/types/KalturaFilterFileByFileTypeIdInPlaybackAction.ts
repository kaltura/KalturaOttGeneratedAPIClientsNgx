
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileTypeIdAction, KalturaFilterFileByFileTypeIdActionArgs } from './KalturaFilterFileByFileTypeIdAction';

export interface KalturaFilterFileByFileTypeIdInPlaybackActionArgs  extends KalturaFilterFileByFileTypeIdActionArgs {
    
}


export class KalturaFilterFileByFileTypeIdInPlaybackAction extends KalturaFilterFileByFileTypeIdAction {

    

    constructor(data? : KalturaFilterFileByFileTypeIdInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdInPlaybackAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByFileTypeIdInPlaybackAction'] = KalturaFilterFileByFileTypeIdInPlaybackAction;