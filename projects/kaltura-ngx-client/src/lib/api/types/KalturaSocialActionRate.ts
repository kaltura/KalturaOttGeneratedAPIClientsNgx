
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSocialAction, KalturaSocialActionArgs } from './KalturaSocialAction';

export interface KalturaSocialActionRateArgs  extends KalturaSocialActionArgs {
    rate? : number;
}


export class KalturaSocialActionRate extends KalturaSocialAction {

    rate : number;

    constructor(data? : KalturaSocialActionRateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialActionRate' },
				rate : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSocialActionRate'] = KalturaSocialActionRate;