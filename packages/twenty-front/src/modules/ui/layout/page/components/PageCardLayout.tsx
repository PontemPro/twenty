import { InformationBannerWrapper } from '@/information-banner/components/InformationBannerWrapper';
import { styled } from '@linaria/react';
import { type ReactNode } from 'react';
import { MOBILE_VIEWPORT, themeCssVariables } from 'twenty-ui/theme-constants';

type PageCardLayoutProps = {
  header: ReactNode;
  secondaryBar?: ReactNode;
  children: ReactNode;
  showInformationBanner?: boolean;
};

const StyledRoot = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  min-height: 0;
  min-width: 0;

  @media print {
    display: block;
    min-height: auto;
    min-width: auto;
  }
`;

const StyledMainCardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  margin-left: -3px;
  min-width: 0;
  padding-left: 4px;
  /* Pontem Pro design reference: the page card floats with a 12px gap to
     the right and bottom edges of the frame. */
  padding-bottom: 12px;
  padding-right: 12px;
  width: 0;

  @media (max-width: ${MOBILE_VIEWPORT}px) {
    margin-left: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  @media print {
    display: block;
    margin-left: 0;
    min-width: auto;
    padding-left: 0;
    width: auto;
  }
`;

// oxlint-disable-next-line twenty/no-hardcoded-colors
const StyledCard = styled.div`
  background: ${themeCssVariables.background.primary};
  /* Pontem Pro design reference: 10px radius on all corners, light border
     ring and a soft petrol shadow. */
  border-radius: 10px;
  box-shadow:
    0 1px 3px rgba(0, 60, 70, 0.06),
    0 0 0 1px ${themeCssVariables.border.color.light};
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  width: 100%;

  .dark & {
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.3),
      0 0 0 1px ${themeCssVariables.border.color.medium};
  }

  @media (max-width: ${MOBILE_VIEWPORT}px) {
    border-radius: 0;
    box-shadow: none;

    .dark & {
      box-shadow: none;
    }
  }

  @media print {
    border-radius: 0;
    box-shadow: none;
    display: block;
    min-height: auto;
    overflow: visible;
  }
`;

const StyledBodyContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  width: 100%;

  @media print {
    display: block;
    min-height: auto;
  }
`;

const StyledPrintHidden = styled.div`
  @media print {
    display: none;
  }
`;

export const PageCardLayout = ({
  header,
  secondaryBar,
  children,
  showInformationBanner = true,
}: PageCardLayoutProps) => {
  return (
    <StyledRoot>
      <StyledMainCardWrapper>
        {/* Pontem Pro design reference: the header floats above the card on
            the frame; only the secondary bar and body live inside the card. */}
        <StyledPrintHidden>{header}</StyledPrintHidden>
        <StyledCard>
          <StyledPrintHidden>{secondaryBar}</StyledPrintHidden>
          <StyledBodyContent>
            {showInformationBanner && (
              <StyledPrintHidden>
                <InformationBannerWrapper />
              </StyledPrintHidden>
            )}
            {children}
          </StyledBodyContent>
        </StyledCard>
      </StyledMainCardWrapper>
    </StyledRoot>
  );
};
