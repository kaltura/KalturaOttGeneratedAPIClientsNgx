
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByVideoCodecAction, KalturaFilterFileByVideoCodecActionArgs } from './KalturaFilterFileByVideoCodecAction';

export interface KalturaFilterFileByVideoCodecInDiscoveryActionArgs  extends KalturaFilterFileByVideoCodecActionArgs {
    
}


export class KalturaFilterFileByVideoCodecInDiscoveryAction extends KalturaFilterFileByVideoCodecAction {

    

    constructor(data? : KalturaFilterFileByVideoCodecInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByVideoCodecInDiscoveryAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByVideoCodecInDiscoveryAction'] = KalturaFilterFileByVideoCodecInDiscoveryAction;