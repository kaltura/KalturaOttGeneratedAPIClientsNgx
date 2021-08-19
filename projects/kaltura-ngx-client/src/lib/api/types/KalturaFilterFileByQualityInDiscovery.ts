
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByQuality, KalturaFilterFileByQualityArgs } from './KalturaFilterFileByQuality';

export interface KalturaFilterFileByQualityInDiscoveryArgs  extends KalturaFilterFileByQualityArgs {
    
}


export class KalturaFilterFileByQualityInDiscovery extends KalturaFilterFileByQuality {

    

    constructor(data? : KalturaFilterFileByQualityInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQualityInDiscovery' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByQualityInDiscovery'] = KalturaFilterFileByQualityInDiscovery;