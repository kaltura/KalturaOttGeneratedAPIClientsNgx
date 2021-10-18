
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileTypeIdAction, KalturaFilterFileByFileTypeIdActionArgs } from './KalturaFilterFileByFileTypeIdAction';

export interface KalturaFilterFileByFileTypeIdInDiscoveryActionArgs  extends KalturaFilterFileByFileTypeIdActionArgs {
    
}


export class KalturaFilterFileByFileTypeIdInDiscoveryAction extends KalturaFilterFileByFileTypeIdAction {

    

    constructor(data? : KalturaFilterFileByFileTypeIdInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeIdInDiscoveryAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByFileTypeIdInDiscoveryAction'] = KalturaFilterFileByFileTypeIdInDiscoveryAction;