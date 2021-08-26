
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterAction, KalturaFilterActionArgs } from './KalturaFilterAction';

export interface KalturaFilterAssetByKsqlActionArgs  extends KalturaFilterActionArgs {
    ksql? : string;
}


export class KalturaFilterAssetByKsqlAction extends KalturaFilterAction {

    ksql : string;

    constructor(data? : KalturaFilterAssetByKsqlActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterAssetByKsqlAction' },
				ksql : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterAssetByKsqlAction'] = KalturaFilterAssetByKsqlAction;