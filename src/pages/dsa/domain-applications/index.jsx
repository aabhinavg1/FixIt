import React from 'react';
import DsaShell from '@site/src/components/dsa/DsaShell';
import DsaPageFrame from '@site/src/components/dsa/DsaPageFrame';
import DsaPageSection from '@site/src/components/dsa/DsaPageSection';
import DsaCardGrid from '@site/src/components/dsa/DsaCardGrid';
import DsaSectionCard from '@site/src/components/dsa/DsaSectionCard';
import { DSA_DOMAIN_AREAS } from '@site/src/data/dsa';

export default function DsaDomainApplications() {
  return (
    <DsaShell title="Domain Usage" description="Where DSA shows up in AI, databases, OS, networking, robotics, graphics, finance, gaming, search, recommendation, and security." lead="This section makes DSA feel useful by showing the same ideas across different systems and products." activePath="/dsa/domain-applications">
      <DsaPageFrame>
        <DsaPageSection kicker="Real-world use" title="Where these ideas actually appear" text="" aside="This is where DSA starts feeling connected to real engineering.">
          <DsaCardGrid items={DSA_DOMAIN_AREAS} renderItem={(item) => <DsaSectionCard key={item.title} tag="Domain" title={item.title} description={item.description} />} />
        </DsaPageSection>
      </DsaPageFrame>
    </DsaShell>
  );
}
