import VideoBackground from '../components/VideoBackground';
import Monogram from '../components/Monogram';
import GlassCard from '../components/GlassCard';
import { VIDEO_URLS } from '../constants/profile';
import { Phone, Mail, MapPin, Linkedin, Globe, GraduationCap } from 'lucide-react';

const educationItems = [
  {
    title: 'MD / Neurosurgery training',
    org: 'Astrakhan State Medical University',
    date: '2014–2021',
  },
  {
    title: 'DU · Clinical Trial Project Leadership',
    org: 'Sorbonne Université',
    date: '',
  },
  {
    title: 'DU · Psychopharmacology & Brain Stimulation Therapies',
    org: 'Sorbonne Université',
    date: '',
  },
  {
    title: 'Master (Research) · Cellular Signaling & Integrative Neurosciences',
    org: 'Université Paris-Saclay',
    date: '',
  },
  {
    title: 'Master (ongoing) · Medical Law, Bioethics & Health',
    org: 'Université Paris 8',
    date: '2025–2026',
  },
];

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 min-w-0">
      <div className="mt-0.5 text-white/70 shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-[clamp(9px,0.75vw,12px)] uppercase tracking-[0.12em] text-white/55">
          {label}
        </div>
        <div className="text-[clamp(11px,0.95vw,16px)] text-white/92 leading-snug break-words">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function OutroSlide() {
  return (
    <div className="relative w-full h-full px-[5.2%] py-[4%] overflow-hidden">
      <VideoBackground src={VIDEO_URLS.contact} />

      <div className="relative z-10 h-full grid grid-rows-[auto_auto_1fr] gap-y-[2.4%]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Monogram />
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Neuroscience Portfolio</span>
          <span className="text-[clamp(12px,1.2vw,20px)] opacity-80">Page 004</span>
        </div>

        {/* Title + intro */}
        <div className="max-w-[84%]">
          <h2 className="text-[clamp(28px,4vw,64px)] tracking-[-0.02em] leading-[1.03] font-bold whitespace-pre-line">
            {'Education, Recognition &\nNeuromodulation Collaboration'}
          </h2>

          <p className="text-[clamp(12px,1.05vw,18px)] opacity-90 mt-[2%] max-w-[56%] leading-[1.45]">
            Clinician-researcher with neurosurgical training, advanced neuroscience education, and clinical trial
            leadership experience, focused on responsible innovation in brain stimulation and translational
            neurotechnology.
          </p>
        </div>

        {/* Main content: Education + Contact only */}
        <div className="grid grid-cols-[1.08fr_0.92fr] gap-[4%] min-h-0 items-stretch">
          {/* Education card */}
          <GlassCard className="min-h-0 p-[clamp(18px,2vw,30px)] flex flex-col">
            <div className="flex items-center gap-3 mb-[clamp(10px,1vw,14px)]">
              <GraduationCap className="text-white/80" size={22} />
              <h3 className="text-[clamp(16px,1.5vw,24px)] font-bold">Education & Training</h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-[clamp(10px,1vw,14px)]">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[clamp(9px,0.8vw,12px)] text-white/75">
                Neurosurgery
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[clamp(9px,0.8vw,12px)] text-white/75">
                Clinical Trials
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[clamp(9px,0.8vw,12px)] text-white/75">
                Brain Stimulation
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[clamp(9px,0.8vw,12px)] text-white/75">
                Bioethics / Law
              </span>
            </div>

            <ul className="space-y-[clamp(8px,0.8vw,12px)] min-h-0">
              {educationItems.map((item) => (
                <li
                  key={`${item.title}-${item.org}`}
                  className="rounded-[14px] border border-white/8 bg-white/[0.025] px-[clamp(10px,1vw,14px)] py-[clamp(8px,0.7vw,11px)]"
                >
                  <div className="text-[clamp(11px,0.95vw,15px)] text-white/92 leading-snug">
                    {item.title}
                  </div>
                  <div className="text-[clamp(10px,0.82vw,13px)] text-white/65 leading-snug mt-1">
                    {item.org}
                    {item.date ? ` · ${item.date}` : ''}
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Contact card */}
          <GlassCard className="min-h-0 p-[clamp(18px,2vw,30px)] flex flex-col">
            <div className="mb-[clamp(10px,1vw,14px)]">
              <h3 className="text-[clamp(16px,1.45vw,24px)] font-bold">Contact</h3>
              <p className="text-[clamp(11px,0.9vw,15px)] text-white/75 mt-2 leading-snug max-w-[95%]">
                Open to collaborations in neuromodulation trials, brain stimulation research, and translational
                neurotechnology.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-[clamp(10px,0.9vw,14px)] mt-[clamp(6px,0.6vw,10px)]">
              <ContactItem
                icon={<Phone className="w-[clamp(16px,1.1vw,20px)]" strokeWidth={1.6} />}
                label="Phone"
                value="+33 6 95 92 08 23"
              />
              <ContactItem
                icon={<Mail className="w-[clamp(16px,1.1vw,20px)]" strokeWidth={1.6} />}
                label="Email"
                value="yassine.yachou@gmail.com"
              />
              <ContactItem
                icon={<MapPin className="w-[clamp(16px,1.1vw,20px)]" strokeWidth={1.6} />}
                label="Location"
                value="Paris, France"
              />
              <ContactItem
                icon={<Linkedin className="w-[clamp(16px,1.1vw,20px)]" strokeWidth={1.6} />}
                label="LinkedIn"
                value="linkedin.com/in/yassine-yachou"
              />
              <ContactItem
                icon={<Globe className="w-[clamp(16px,1.1vw,20px)]" strokeWidth={1.6} />}
                label="Scholar"
                value="Google Scholar Profile"
              />
            </div>

            {/* Subtle closing line */}
            <div className="mt-auto pt-[clamp(12px,1vw,16px)]">
              <div className="rounded-[16px] border border-white/10 bg-white/[0.03] px-[clamp(10px,1vw,14px)] py-[clamp(8px,0.8vw,12px)]">
                <span className="text-[clamp(10px,0.82vw,13px)] text-white/75">
                  Final slide · Education background and collaboration contact
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}