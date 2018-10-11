
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPurchase, KalturaPurchaseArgs } from './KalturaPurchase';

export interface KalturaPurchaseSessionArgs  extends KalturaPurchaseArgs {
    previewModuleId? : number;
}


export class KalturaPurchaseSession extends KalturaPurchase {

    previewModuleId : number;

    constructor(data? : KalturaPurchaseSessionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPurchaseSession' },
				previewModuleId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPurchaseSession'] = KalturaPurchaseSession;