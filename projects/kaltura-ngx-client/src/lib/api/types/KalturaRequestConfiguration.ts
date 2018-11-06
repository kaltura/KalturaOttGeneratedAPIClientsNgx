
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseResponseProfile } from './KalturaBaseResponseProfile';
import { KalturaSkipOptions } from './KalturaSkipOptions';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRequestConfigurationArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	userId? : number;
	language? : string;
	currency? : string;
	ks? : string;
	responseProfile? : KalturaBaseResponseProfile;
	abortAllOnError? : boolean;
	skipOnError? : KalturaSkipOptions;
}


export class KalturaRequestConfiguration extends KalturaObjectBase {

    partnerId : number;
	userId : number;
	language : string;
	currency : string;
	ks : string;
	responseProfile : KalturaBaseResponseProfile;
	abortAllOnError : boolean;
	skipOnError : KalturaSkipOptions;

    constructor(data? : KalturaRequestConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRequestConfiguration' },
				partnerId : { type : 'n' },
				userId : { type : 'n' },
				language : { type : 's' },
				currency : { type : 's' },
				ks : { type : 's' },
				responseProfile : { type : 'o', subTypeConstructor : KalturaBaseResponseProfile, subType : 'KalturaBaseResponseProfile' },
				abortAllOnError : { type : 'b' },
				skipOnError : { type : 'es', subTypeConstructor : KalturaSkipOptions, subType : 'KalturaSkipOptions' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRequestConfiguration'] = KalturaRequestConfiguration;