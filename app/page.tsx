"use client";
import { useState } from "react";

// ---- Card Data ----
const TOTAL_CARDS = 77;
type CardStatus = "unseen" | "spotted" | "claimed";
type Card = {
  id: number;
  status: CardStatus;
  spottedProofUrl?: string;
  spottedAt?: string;
  claimedBy?: string;
  claimedContact?: string;
  claimedImageUrl?: string;
  updatedAt?: string;
  spottedImageUrl?: string;
};

const cardData: Card[] = Array.from({ length: TOTAL_CARDS }).map((_, i) => {
  if (i === 0) {
    return {
      id: 1,
      status: "spotted",
      spottedAt: "Instagram (@ancestralmtg)",
      spottedProofUrl: "https://www.instagram.com/ancestralmtg/",
      spottedImageUrl: "/spotted/1.jpg",
      updatedAt: "2024-06-20",
    };
  }
  if (i === 10) {
    return {
      id: 11,
      status: "spotted",
      spottedAt: "Instagram (@xopher314)",
      spottedProofUrl: "https://www.instagram.com/xopher314/",
      spottedImageUrl: "/spotted/11.jpg",
      updatedAt: "2024-06-16",
    };
  }
  if (i === 32) {
    return {
      id: 33,
      status: "spotted",
      spottedAt: "Instagram (@benjimin.be.13)",
      spottedProofUrl: "https://www.instagram.com/benjimin.be.13/",
      spottedImageUrl: "/spotted/33.jpg",
      updatedAt: "2024-06-10",
    };
  }
  if (i === 40) {
    return {
      id: 41,
      status: "spotted",
      spottedAt: "eBay",
      spottedProofUrl:
        "https://www.ebay.com/sch/i.html?_nkw=golden+chocobo+mtg&_sop=12&rt=nc&LH_Sold=1&LH_Complete=1",
      spottedImageUrl: "/spotted/41.jpg",
      updatedAt: "2024-06-12",
    };
  }
  if (i === 66) {
    return {
      id: 67,
      status: "spotted",
      spottedAt: "Twitter (@dickandjanes)",
      spottedProofUrl: "https://twitter.com/dickandjanes",
      spottedImageUrl: "/spotted/67.jpg",
      updatedAt: "2024-06-17",
    };
  }
  if (i === 68) {
    return {
      id: 69,
      status: "spotted",
      spottedAt: "Twitter (@zedoji)",
      spottedProofUrl: "https://twitter.com/zedoji",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 2) {
    return {
      id: 3,
      status: "spotted",
      spottedAt: "Instagram (@jlacomics)",
      spottedProofUrl:
        "https://www.instagram.com/p/DKvoFlZxZh_/?img_index=1&igsh=N3U1ajlmaGE0MmVu",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 9) {
    return {
      id: 10,
      status: "spotted",
      spottedAt: "X (@hawkzii)",
      spottedProofUrl: "https://x.com/hawkzii/status/1931418856926392670",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 13) {
    return {
      id: 14,
      status: "spotted",
      spottedAt: "Facebook (NCGamersGuild)",
      spottedProofUrl: "https://www.facebook.com/photo?fbid=1254032296726540",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 16) {
    return {
      id: 17,
      status: "spotted",
      spottedAt: "Facebook (NCGamersGuild)",
      spottedProofUrl: "https://www.facebook.com/photo?fbid=1254032296726540",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 22) {
    return {
      id: 23,
      status: "spotted",
      spottedAt: "X (@tylernhenry)",
      spottedProofUrl:
        "https://x.com/tylernhenry/status/1934618485335744735/photo/1",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 24) {
    return {
      id: 25,
      status: "spotted",
      spottedAt: "REDDIT (r/MagicCardPulls)",
      spottedProofUrl:
        "https://www.reddit.com/r/MagicCardPulls/comments/1lbk17k/ff_mtg_golden_chocobo_tracker_77/",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 39) {
    return {
      id: 40,
      status: "spotted",
      spottedAt: "WHATNOT (@Gapman)",
      spottedProofUrl: "https://imgur.com/a/chocobo-40-ONYlafS",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 54) {
    return {
      id: 55,
      status: "spotted",
      spottedAt: "X (@SadPoor)",
      spottedProofUrl: "https://x.com/SadPoor/status/1931688237547888643",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 55) {
    return {
      id: 56,
      status: "spotted",
      spottedAt: "Instagram (@cosmicgamesbham)",
      spottedProofUrl:
        "https://www.instagram.com/p/DK3U-poS0lC/?igsh=MWt3bXYzbTBzajU1Mw%3D%3D",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 60) {
    return {
      id: 61,
      status: "spotted",
      spottedAt: "Instagram (@laytongamingofficial)",
      spottedProofUrl:
        "https://www.instagram.com/p/DKlEguds490/?igsh=OGs2bjk5M3FibWd0",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 44) {
    return {
      id: 45,
      status: "spotted",
      spottedAt: "REDDIT r/MagiCardPulls (@tpezair)",
      spottedProofUrl:
        "https://www.reddit.com/r/MagicCardPulls/comments/1ld7bie/4577_golden_chocobo/",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  if (i === 11) {
    return {
      id: 12,
      status: "spotted",
      spottedAt: "Instagram (@greyguardiangames)",
      spottedProofUrl: "https://www.instagram.com/p/DK1_MnaPPTx/",
      spottedImageUrl: "/spotted/69.jpg",
      updatedAt: "2024-06-19",
    };
  }
  return {
    id: i + 1,
    status: "unseen",
    updatedAt: "",
  };
});

const statusLabels: { [K in CardStatus]: string } = {
  unseen: "Unseen",
  spotted: "Spotted",
  claimed: "Claimed",
};

const tooltipText: Record<CardStatus | "all", string> = {
  all: "Show all cards.",
  claimed: "Claimed: owner directly contacted us and provided concrete proof.",
  spotted:
    "Spotted: card seen in a public post/listing, not owner direct. May be reposted.",
  unseen: "Not seen or confirmed. If you have it, claim it!",
};

function getLastUpdatedDate(cards: Card[]) {
  const dates = cards
    .map((c) => c.updatedAt)
    .filter(Boolean)
    .sort()
    .reverse();
  return dates[0] || null;
}

// Wide, glassy tooltip with gold border
function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <span className="chocotooltip-outer">
      <span className="chocotooltip-box">{children}</span>
      <span className="chocotooltip-arrow" />
      <style jsx>{`
        .chocotooltip-outer {
          position: absolute;
          bottom: 110%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .chocotooltip-box {
          background: linear-gradient(120deg, #201f2d 65%, #282a37e9 100%);
          color: #ffe48b;
          padding: 1em 2.1em 1em 2.1em;
          border-radius: 13px;
          font-size: 1.1em;
          font-weight: 600;
          text-align: center;
          box-shadow: 0 8px 32px 0 #000b, 0 1px 0 0 #fff1 inset;
          border: 2px solid #ffe48bde;
          min-width: 240px;
          max-width: 420px;
          letter-spacing: 0.01em;
          line-height: 1.46;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.18s;
        }
        .chocotooltip-arrow {
          margin-top: -3.5px;
          width: 0;
          height: 0;
          border-left: 17px solid transparent;
          border-right: 17px solid transparent;
          border-top: 13px solid #ffe48bde;
          filter: drop-shadow(0 4px 2.5px #2a260e52);
        }
      `}</style>
    </span>
  );
}

// ---- NEW: CLAIM MODAL ----
function ClaimModal({ card, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    proofUrl: "",
  });
  const [sent, setSent] = useState(false);

  const mailtoHref = () => {
    const subject = encodeURIComponent(
      `Golden Chocobo Claim - Card #${card.id}`
    );
    const body = encodeURIComponent(
      `Hello,\n\nI would like to claim Golden Chocobo Card #${card.id}.\n\n` +
        `Name: ${form.name}\nEmail: ${form.email}\n\n` +
        `Message: ${form.message}\nProof: ${form.proofUrl}\n\n` +
        `Thank you!\n`
    );
    return `mailto:chasingchocobo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative rounded-3xl shadow-2xl border-4 border-yellow-400 bg-black flex flex-col items-center justify-center max-w-md w-full mx-3 transition-transform duration-300 animate-scaleup"
        style={{ maxHeight: "92vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-yellow-300 text-3xl font-bold hover:text-red-400 transition"
        >
          &times;
        </button>
        <div className="w-full p-7 pt-2 flex flex-col items-center text-center bg-black/80 rounded-3xl">
          <div className="text-yellow-200 text-2xl font-extrabold mb-1 drop-shadow">
            Claim Card #{card.id.toString().padStart(2, "0")}
          </div>
          <div className="mb-2 text-yellow-100 text-base">
            Submit proof you own this card.
            <br />
            <span className="text-yellow-300 font-bold">
              Your info will be sent to chasingchocobo@gmail.com.
            </span>
          </div>
          {sent ? (
            <div className="py-8 px-3 text-lg text-green-300 font-bold">
              Submission started!
              <br />
              Please attach images if needed in your email client.
              <br />
              Thank you!
            </div>
          ) : (
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                window.open(mailtoHref(), "_blank");
              }}
            >
              <input
                required
                className="px-4 py-2 rounded-lg bg-slate-800 text-yellow-100 border-2 border-yellow-400 focus:outline-none"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
              />
              <input
                required
                className="px-4 py-2 rounded-lg bg-slate-800 text-yellow-100 border-2 border-yellow-400 focus:outline-none"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
              <textarea
                className="px-4 py-2 rounded-lg bg-slate-800 text-yellow-100 border-2 border-yellow-400 focus:outline-none"
                placeholder="Message (e.g. how/where you pulled it)"
                rows={3}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
              />
              <input
                className="px-4 py-2 rounded-lg bg-slate-800 text-yellow-100 border-2 border-yellow-400 focus:outline-none"
                type="url"
                placeholder="Proof image/link (imgur, etc)"
                value={form.proofUrl}
                onChange={(e) =>
                  setForm((f) => ({ ...f, proofUrl: e.target.value }))
                }
              />
              <button
                type="submit"
                className="mt-1 px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-950 font-extrabold rounded-2xl shadow-xl transition-all text-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Submit Claim
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ---- MAIN COMPONENT ----
export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState("all");
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [claimCard, setClaimCard] = useState(null);

  const foundCount = cardData.filter((c) => c.status !== "unseen").length;
  const percent = Math.round((foundCount / TOTAL_CARDS) * 100);
  const displayCards =
    filter === "all"
      ? cardData
      : cardData.filter((card) => card.status === filter);

  const lastUpdated = getLastUpdatedDate(cardData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black p-2 flex flex-col items-center">
      {/* Header */}
      <header className="w-full pt-10 pb-2">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-1 drop-shadow-lg tracking-tight">
            Golden Chocobo Tracker
          </h1>
          {/* Progress bar */}
          <div className="mt-6 mb-2 flex flex-col items-center w-full">
            <div className="text-lg font-bold text-yellow-100 mb-1 drop-shadow">
              {foundCount} / {TOTAL_CARDS} Found
            </div>
            <div className="relative w-[350px] md:w-[480px] h-8 flex items-center bg-gradient-to-tr from-yellow-900/30 to-yellow-800/40 rounded-xl shadow-lg border-2 border-yellow-400/70 overflow-hidden backdrop-blur">
              <div
                className="h-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 transition-all duration-700 animate-stripes-glass"
                style={{
                  width: `${percent}%`,
                }}
              >
                {percent > 10 && (
                  <span className="pl-5 font-extrabold text-yellow-950 text-base h-full flex items-center drop-shadow">
                    {percent}%
                  </span>
                )}
              </div>
              {percent <= 10 && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-yellow-200 text-base drop-shadow">
                  {percent}%
                </span>
              )}
              <span className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-white/30 via-transparent to-transparent blur-sm opacity-60"></span>
            </div>
            <div className="mt-2 text-xs text-yellow-300 font-semibold italic">
              Last updated: {lastUpdated || "N/A"}
            </div>
          </div>

          {/* Filter buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center mb-3">
            {(["all", "claimed", "spotted", "unseen"] as const).map((key) => (
              <div className="relative" key={key} style={{ minWidth: 108 }}>
                <button
                  className={
                    "px-7 py-2 text-lg font-bold focus:outline-none border-2 transition-all " +
                    "rounded-lg " +
                    (filter === key
                      ? key === "all"
                        ? "bg-yellow-300 text-black border-yellow-400 shadow-yellow-200"
                        : key === "claimed"
                        ? "bg-green-400 text-black border-green-300 shadow-green-200"
                        : key === "spotted"
                        ? "bg-yellow-200 text-yellow-900 border-yellow-300 shadow-yellow-100"
                        : "bg-slate-400 text-black border-slate-200 shadow-slate-200"
                      : "bg-black/40 text-yellow-100 border-yellow-900/40 hover:bg-yellow-800/40 hover:border-yellow-600 hover:scale-105")
                  }
                  onMouseEnter={() => setHoveredBtn(key)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  onFocus={() => setHoveredBtn(key)}
                  onBlur={() => setHoveredBtn(null)}
                  onClick={() => setFilter(key)}
                  tabIndex={0}
                  style={{
                    boxShadow:
                      filter === key
                        ? "0 6px 30px 0 rgba(252,220,90,0.09)"
                        : "0 2px 10px 0 rgba(40,40,15,0.09)",
                  }}
                >
                  {key === "all"
                    ? "All"
                    : key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
                {hoveredBtn === key && <Tooltip>{tooltipText[key]}</Tooltip>}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Card grid */}
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8 mt-2">
        {displayCards.map((card) => {
          const isFound = card.status !== "unseen";
          return (
            <button
              key={card.id}
              className={`relative group rounded-2xl overflow-hidden shadow-lg border-2 transition-all ${
                card.status === "claimed"
                  ? "border-green-500"
                  : card.status === "spotted"
                  ? "border-yellow-400"
                  : "border-yellow-500"
              } ${isFound ? "animate-bounce-card" : ""}`}
              style={{
                animationDelay:
                  isFound && card.id ? `${(card.id % 5) * 0.11}s` : undefined,
              }}
              onClick={() => setSelectedCard(card)}
            >
              <img
                src="/backlayer.png"
                alt={`Card ${card.id}`}
                className={
                  "w-full aspect-[3/4] object-cover" +
                  (!isFound ? " grayscale opacity-50 blur-[1px]" : "")
                }
                draggable={false}
                style={{ pointerEvents: "none" }}
              />
              <img
                src="/toplayer.png"
                alt=""
                className={
                  "absolute inset-0 w-full h-full object-cover pointer-events-none" +
                  (!isFound ? " grayscale opacity-50 blur-[1px]" : "")
                }
                style={{ mixBlendMode: "normal" }}
                draggable={false}
              />
              <span className="absolute inset-0 pointer-events-none bg-gradient-to-br from-yellow-200/60 via-yellow-400/30 to-transparent rounded-2xl mix-blend-screen"></span>
              <span className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 text-yellow-200 text-xs rounded font-bold group-hover:bg-yellow-300 group-hover:text-black transition">
                {String(card.id).padStart(2, "0")}/77
              </span>

              {/* UNSEEN Watermark */}
              {card.status === "unseen" && (
                <>
                  <span
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-20"
                    aria-hidden="true"
                  >
                    <span className="unseen-watermark">UNSEEN</span>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-extrabold opacity-0 group-hover:opacity-80 bg-yellow-200/80 text-yellow-900 transition">
                    CLAIM
                  </span>
                </>
              )}

              {card.status === "spotted" && (
                <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-yellow-300 text-yellow-900 font-bold text-xs px-3 py-1 rounded-xl shadow-md opacity-95 pointer-events-none z-10">
                  SPOTTED
                </span>
              )}
              {card.status === "claimed" && (
                <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-400 text-green-900 font-bold text-xs px-3 py-1 rounded-xl shadow-md opacity-95 pointer-events-none z-10">
                  CLAIMED
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Card Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative rounded-3xl shadow-2xl border-4 border-yellow-400 bg-black flex flex-col items-center justify-center max-w-xl w-full mx-3 transition-transform duration-300 animate-scaleup"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/backlayer.png"
              alt={`Card ${selectedCard.id}`}
              className={
                "w-full h-[55vh] object-cover rounded-3xl shadow-xl" +
                (selectedCard.status === "unseen"
                  ? " grayscale opacity-50 blur-[1px]"
                  : "")
              }
              draggable={false}
            />
            <img
              src="/toplayer.png"
              alt=""
              className={
                "absolute top-0 left-0 w-full h-[55vh] object-cover pointer-events-none rounded-3xl" +
                (selectedCard.status === "unseen"
                  ? " grayscale opacity-50 blur-[1px]"
                  : "")
              }
              style={{ mixBlendMode: "normal" }}
              draggable={false}
            />
            <div className="relative z-10 w-full p-6 pt-2 flex flex-col items-center text-center bg-black/70 rounded-b-3xl">
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 text-yellow-300 text-3xl font-bold hover:text-red-400 transition"
              >
                &times;
              </button>
              <div className="text-yellow-200 text-3xl font-extrabold mb-2 drop-shadow">
                #{selectedCard.id.toString().padStart(2, "0")} / 77
              </div>
              <div className="mb-3">
                {selectedCard.status !== "unseen" && (
                  <span
                    className={`px-4 py-1.5 rounded-xl text-lg font-bold mr-2 ${
                      selectedCard.status === "claimed"
                        ? "bg-green-400 text-green-900"
                        : "bg-yellow-200 text-yellow-900"
                    }`}
                  >
                    {statusLabels[selectedCard.status]}
                  </span>
                )}
              </div>
              {selectedCard.status === "spotted" && (
                <div className="mb-3">
                  <div className="text-yellow-300 text-lg font-semibold mb-1">
                    Spotted on: {selectedCard.spottedAt}
                  </div>
                  {selectedCard.spottedProofUrl && (
                    <div>
                      <a
                        href={selectedCard.spottedProofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-300 hover:text-blue-500 font-bold"
                      >
                        View Source/Post
                      </a>
                    </div>
                  )}
                </div>
              )}

              {selectedCard.status === "unseen" && (
                <div className="text-yellow-200 font-semibold text-lg mt-4 mb-4 flex flex-col items-center gap-4">
                  <span>
                    Not spotted yet.
                    <br />
                    If you own this card, click below to CLAIM!
                  </span>
                  <button
                    className="px-6 py-2 mt-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-950 font-extrabold rounded-2xl shadow-xl transition-all text-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    style={{ minWidth: 160 }}
                    onClick={() => {
                      setClaimCard(selectedCard);
                      setSelectedCard(null);
                    }}
                  >
                    CLAIM THIS CARD
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CLAIM MODAL */}
      {claimCard && (
        <ClaimModal card={claimCard} onClose={() => setClaimCard(null)} />
      )}

      <footer className="w-full mt-16 py-10 px-4 flex flex-col items-center gap-4 text-base text-slate-100 bg-transparent">
        <div className="text-center max-w-2xl text-lg leading-relaxed">
          <strong className="font-bold text-yellow-300 text-xl">
            Disclaimer:
          </strong>
          <span className="ml-2">
            Fan project, not affiliated with Wizards, Hasbro, Square Enix, etc.
            <br />
            <span className="text-yellow-300 font-bold">
              Please don't sue me, I'm broke. Hire me instead—I'm a software
              engineer with 3 years of experience.
            </span>
            <br />
            Instagram:{" "}
            <a
              href="https://instagram.com/mvrcos.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-200 hover:text-yellow-300 font-bold ml-1"
            >
              @mvrcosi
            </a>
            <br />
            <span>
              Buy me a coffee:{" "}
              <a
                href="https://buymeacoffee.com/mvrcosi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-yellow-200 hover:text-yellow-300 font-bold ml-1"
              >
                https://buymeacoffee.com/mvrcosi
              </a>
            </span>
            <br />
            Email:{" "}
            <a
              href="mailto:chasingchocobo@gmail.com"
              className="underline text-yellow-200 hover:text-yellow-300 font-bold ml-1"
            >
              chasingchocobo@gmail.com
            </a>
            .
          </span>
        </div>
      </footer>

      <style>
        {`
        @keyframes stripes-glass {
          0% { background-position-x: 0; }
          100% { background-position-x: 40px; }
        }
        .animate-stripes-glass {
          background-image: repeating-linear-gradient(
            135deg,
            rgba(255,236,124,0.37) 0px,
            rgba(255,236,124,0.64) 14px,
            rgba(255,215,0,0.10) 16px,
            rgba(255,236,124,0.10) 32px
          );
          background-size: 40px 40px;
          animation: stripes-glass 1.7s linear infinite;
        }
        @keyframes bounce-card {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-12px);}
        }
        .animate-bounce-card {
          animation: bounce-card 1.7s cubic-bezier(.65,.05,.36,1) infinite;
        }
        @keyframes scaleup {
          from { transform: scale(0.93); opacity: 0.3; }
          to   { transform: scale(1); opacity: 1; }
        }
        .animate-scaleup {
          animation: scaleup 0.20s cubic-bezier(.44,2,.3,.9);
        }
        /* UNSEEN Watermark */
        .unseen-watermark {
            position: absolute;
              top: 42%;
              left: 50%;
              width: 180%;
              min-width: 340px;
              font-family: 'Montserrat', 'Arial Black', Arial, sans-serif;
              font-size: 2.1rem;
              font-weight: 900;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: #fffbe6e6;
              background: linear-gradient(95deg, #fbe698 65%, #ffeb91ee 100%);
              padding: 0.26em 0;
              border-radius: 1.3em;
              box-shadow: 0 2px 22px 0 #ffef7c34, 0 0 0 2px #ffe48b60 inset;
              border: 2.5px solid #ffe48bb9;
              opacity: 0.77;
              transform: translate(-50%, -50%) rotate(-24deg);
              filter: blur(0.2px) drop-shadow(0 0 6px #0005);
              pointer-events: none;
              user-select: none;
              mix-blend-mode: lighten;
              text-align: center;
              z-index: 20;
        }
        `}
      </style>
    </div>
  );
}
