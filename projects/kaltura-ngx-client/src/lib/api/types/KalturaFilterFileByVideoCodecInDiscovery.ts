
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByVideoCodec, KalturaFilterFileByVideoCodecArgs } from './KalturaFilterFileByVideoCodec';

export interface KalturaFilterFileByVideoCodecInDiscoveryArgs  extends KalturaFilterFileByVideoCodecArgs {
    
}


export class KalturaFilterFileByVideoCodecInDiscovery extends KalturaFilterFileByVideoCodec {

    

    constructor(data? : KalturaFilterFileByVideoCodecInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByVideoCodecInDiscovery' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByVideoCodecInDiscovery'] = KalturaFilterFileByVideoCodecInDiscovery;