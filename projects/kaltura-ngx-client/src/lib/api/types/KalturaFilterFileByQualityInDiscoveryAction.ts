
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByQualityAction, KalturaFilterFileByQualityActionArgs } from './KalturaFilterFileByQualityAction';

export interface KalturaFilterFileByQualityInDiscoveryActionArgs  extends KalturaFilterFileByQualityActionArgs {
    
}


export class KalturaFilterFileByQualityInDiscoveryAction extends KalturaFilterFileByQualityAction {

    

    constructor(data? : KalturaFilterFileByQualityInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByQualityInDiscoveryAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByQualityInDiscoveryAction'] = KalturaFilterFileByQualityInDiscoveryAction;