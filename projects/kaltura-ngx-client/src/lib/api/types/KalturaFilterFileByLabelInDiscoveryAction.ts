
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByLabelAction, KalturaFilterFileByLabelActionArgs } from './KalturaFilterFileByLabelAction';

export interface KalturaFilterFileByLabelInDiscoveryActionArgs  extends KalturaFilterFileByLabelActionArgs {
    
}


export class KalturaFilterFileByLabelInDiscoveryAction extends KalturaFilterFileByLabelAction {

    

    constructor(data? : KalturaFilterFileByLabelInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByLabelInDiscoveryAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByLabelInDiscoveryAction'] = KalturaFilterFileByLabelInDiscoveryAction;