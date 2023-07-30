import { useIntl } from 'react-intl';
import getTrad from './getTrad';
import type { FormatXMLElementFn, PrimitiveType, Options as IntlMessageFormatOptions } from 'intl-messageformat';

export const useTranslate = () => {
    const intl = useIntl();
    const translate = (contentId: string, values?: unknown, opts?: IntlMessageFormatOptions) => intl.formatMessage(
        { id: getTrad(contentId) }, values as Record<string, PrimitiveType | FormatXMLElementFn<string, string>>, opts)

    return {
        translate
    }
}

