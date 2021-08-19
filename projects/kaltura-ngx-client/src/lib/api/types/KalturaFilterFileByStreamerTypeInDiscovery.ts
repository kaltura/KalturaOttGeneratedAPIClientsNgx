
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByStreamerType, KalturaFilterFileByStreamerTypeArgs } from './KalturaFilterFileByStreamerType';

export interface KalturaFilterFileByStreamerTypeInDiscoveryArgs  extends KalturaFilterFileByStreamerTypeArgs {
    
}


export class KalturaFilterFileByStreamerTypeInDiscovery extends KalturaFilterFileByStreamerType {

    

    constructor(data? : KalturaFilterFileByStreamerTypeInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByStreamerTypeInDiscovery' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByStreamerTypeInDiscovery'] = KalturaFilterFileByStreamerTypeInDiscovery;