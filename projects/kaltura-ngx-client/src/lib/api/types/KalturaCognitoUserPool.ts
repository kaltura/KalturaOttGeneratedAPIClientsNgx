
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDefault } from './KalturaDefault';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCognitoUserPoolArgs  extends KalturaObjectBaseArgs {
    default? : KalturaDefault;
}


export class KalturaCognitoUserPool extends KalturaObjectBase {

    default : KalturaDefault;

    constructor(data? : KalturaCognitoUserPoolArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCognitoUserPool' },
				default : { type : 'o', subTypeConstructor : KalturaDefault, subType : 'KalturaDefault' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCognitoUserPool'] = KalturaCognitoUserPool;