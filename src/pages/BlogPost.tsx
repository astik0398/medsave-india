import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import online_medicine_buying from "@/assets/online medicine buying.png"
import online_coupon_discount from "@/assets/online medicine coupon discount (433 x 192 px).png"
import { Helmet } from "react-helmet-async"; // Import Helmet
import { toast } from "@/components/ui/use-toast"; // Optional: For toast notifications

const BlogPost = () => {
  const { id } = useParams();

  console.log('idddd', id);

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.metaDescription,
      url: `https://www.medibachat.in/blog/${id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
        // Optional: Show a toast notification for errors
        toast({
          title: "Share Failed",
          description: "Unable to share the post. Try copying the link instead.",
          variant: "destructive",
        });
      }
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(shareData.url).then(() => {
        toast({
          title: "Link Copied",
          description: "The blog post URL has been copied to your clipboard.",
        });
      }).catch((error) => {
        console.error("Error copying URL:", error);
        toast({
          title: "Copy Failed",
          description: "Unable to copy the URL. Please try again.",
          variant: "destructive",
        });
      });
    }
  };
  
  const blogPosts = {
    "7-online-medicine-shopping-hacks-to-reduce-bills": {
  title: "Top 7 Online Medicine Shopping Hacks to Reduce Your Medicine Prices",
  author: "Team MediBachat",
  date: "August 11, 2025",
  readTime: "8 min read",
  category: "Money-Saving Tips",
  image: online_medicine_buying,
  metaDescription: "Discover 7 proven hacks to save money on online medicine shopping in India. Compare prices, use netmeds coupons or pharmeasy coupons, and leverage generic medicines to cut costs.",
  content:   <>
  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
    Introduction
  </h1>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Rising medicine prices can feel like an unavoidable burden, but the truth is,
    with a little smart shopping, you can significantly cut your pharmacy expenses
    without compromising on quality. The growth of online medicine shopping in India
    has opened up dozens of money-saving opportunities—if you know where to look.
    In this guide, we’ll cover 7 proven online medicine shopping hacks that can help you
    pay less for medicines you need.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    1. Compare Prices Across Multiple Online Pharmacies
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Medicine prices can vary drastically from one platform to another. For example,
    a strip of common blood pressure tablets might cost <b>₹90</b> on one website but <b>₹70</b> on another.
    Use our price comparison tools on <strong><a href="https://medibachat.in/" target="_blank" style={{color:'blue'}}>MediBachat</a></strong> that compares prices of any medicine across top phamarcies platforms like <strong>netmeds</strong>, <strong>truemeds</strong>, <strong>tata1mg</strong>, <strong>pharmeasy</strong> and <strong>apollo pharmacy</strong> to quickly identify the cheapest option.
    Even a small difference in price can add up to significant savings over the course
    of a year, especially for long-term prescriptions.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    2. Use Coupon Codes and Cashback Offers
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Before you hit the checkout button, always search for active coupon codes.
    Most online pharmacies run promotional campaigns during festivals, end-of-month sales,
    or health awareness weeks. Websites like <strong>PharmEasy</strong>, <strong>Apollo 24/7</strong>,
    and <strong>Netmeds</strong> often partner with digital wallets like Paytm or Amazon Pay to
    provide extra cashback. For example, you might get 20% off your total bill plus ₹100 cashback—
    double savings with just a few extra clicks.
<br />
Tired of switching between multiple tabs just to find the right coupon code? On <a href="https://medibachat.in" target="_blank" style={{color:'blue'}}><b>MediBachat</b></a>, you’ll discover all the latest and verified coupons from top online stores—curated in one convenient place to help you save time and money  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    3. Take Advantage of Generic Medicines
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Many people assume brand-name medicines are the only option, but generic medicines
    contain the same active ingredients at a fraction of the price. For instance, instead
    of buying Crocin Advance, you can opt for the generic Paracetamol 500mg tablet.
    Ask your doctor if a generic equivalent is available for your prescription.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    4. Buy in Bulk and Opt for 90-Day Refills
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    If you’re on a long-term prescription, buying in bulk can lead to considerable discounts.
    Many platforms offer lower prices per unit when you purchase a three-month supply.
    This not only saves you money but also reduces the number of orders you place,
    saving on delivery charges and ensuring you never run out of essential medicines.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    5. Subscribe for Auto-Delivery
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Some online pharmacies offer subscription plans where you get a small discount
    for setting up automatic monthly deliveries. For example, if you need diabetes
    medication every month, subscribing can shave off 5–10% from your bill consistently.
    Plus, you avoid last-minute price hikes or out-of-stock issues.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    6. Stack Bank Offers and Wallet Rewards
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Bank credit and debit cards frequently offer instant discounts on online purchases,
    including medicines. For example, HDFC, ICICI, and SBI cards may have offers like
    <em> "Flat 10% off on orders above ₹1,000"</em>. Combine these with cashback rewards
    from wallets like Paytm, PhonePe, or Google Pay for extra savings. Timing your purchases
    to match these bank offer periods can result in huge cumulative savings over the year.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    7. Monitor Seasonal and Flash Sales
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Just like fashion and electronics, medicine platforms also run seasonal sales—especially
    during festive seasons or special days like World Health Day. Flash sales can offer 25–40% off
    for a limited time, but you have to act fast. Signing up for newsletters or app notifications
    ensures you don’t miss these short-lived deals.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    Bonus Tip: Join Loyalty Programs
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Many online pharmacies have loyalty programs where you earn points for each purchase.
    These points can be redeemed for future discounts. For example, Apollo 24/7 offers
    ‘Health Credits’ while 1mg has ‘Care Points’. Over time, these rewards can easily amount
    to a free refill or two each year.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    Why This Works
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    The secret to reducing your medicine bill lies in combining these strategies. Imagine buying
    your medicines in bulk during a flash sale, using a generic alternative, applying a coupon,
    paying with a bank card offer, and earning loyalty points—all in one transaction.
    The savings can be surprisingly large, often exceeding 40% of your original bill.
  </p>

  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
    <strong>Conclusion:</strong> Medicines are essential, but overpaying for them is not.
    By applying these seven online shopping hacks, you can bring down your medicine costs
    while still ensuring top-quality healthcare. Start with just one or two of these tips
    and you’ll quickly see the difference in your monthly expenses. Over time, these habits
    can save you thousands of rupees annually—money that could go toward your family’s
    well-being, investments, or even a much-needed vacation.
  </p>
</>

},
    "online-medicine-discount-coupons-in-india": {
      title: "Pharmacy Discount Coupons in India: A Complete 2025 Guide",
      author: "Team MediBachat",
      date: "March 12, 2024",
      readTime: "4 min read",
      category: "Education",
      image: online_coupon_discount,
      metaDescription: "Learn how to find and use pharmacy discount coupons in India in 2025 to save up to 40% on medicines from top e-pharmacies like Netmeds Tata 1mg, Pharmeasy, Apollo Pharmacy and Truemeds",
      content: <>
  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
    Pharmacy Discount Coupons in India: A Complete 2025 Guide
  </h1>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    In 2025, buying medicines online in India is no longer just about convenience —
    it’s about <strong>saving money smartly</strong>. Prices can vary significantly across platforms,
    and with the right coupon codes, you can often save 5% to 40% on your medicine bills.
    This guide will walk you through where to find pharmacy discount coupons, how to use them,
    and how <a href="https://medibachat.in/" target="_blank" style={{color:'blue'}}><b>MediBachat </b></a>
    can help you compare prices and find the best deals — all in one place.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    Why Pharmacy Coupons Matter in 2025
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Healthcare costs are on the rise, and medicines form a significant part of monthly
    expenses for many households. With e-pharmacies like <strong>PharmEasy</strong>, 
    <strong> Netmeds</strong>, <strong>Tata 1mg</strong>, and <strong>Apollo 24|7</strong>
    competing for customers, coupon codes have become a smart way to cut costs without
    compromising on quality or service.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    Where to Find Pharmacy Discount Coupons
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    There are several reliable ways to discover the best pharmacy discounts:
  </p>
  <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6">
    <li><strong>Official App & Website Offers</strong> – Check the “Offers” or “Deals” section on each pharmacy’s platform.</li>
    <li><strong>Bank & Wallet Partnerships</strong> – Look for cashback offers from Paytm, PhonePe, and Amazon Pay.</li>
    <li><strong>Festive & Seasonal Sales</strong> – Independence Day, Diwali, and New Year sales often bring the biggest discounts.</li>
    <li><strong>Coupon Aggregator Platforms</strong> – Use tools like <a href="https://medibachat.in/" target="_blank" style={{color:'blue'}}><b>MediBachat</b></a> to see all active coupons in one place.</li>
  </ul>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    How MediBachat Makes It Easier
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
     Instead of switching between multiple websites, <a href="https://medibachat.in/" target="_blank" style={{color:'blue'}}><b>MediBachat </b></a> 
    lets you search for a medicine and instantly see prices across top platforms like 
    <strong> Netmeds</strong>, <strong>PharmEasy</strong>, <strong>Tata 1mg</strong>, 
    <strong> Truemeds</strong>, and <strong>Apollo Pharmacy</strong>. You also get a list 
    of all currently active coupon codes for each platform, ensuring you combine the lowest 
    price with the highest available discount.
  </p>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    How to Use Coupons Effectively
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    To get the most out of your coupon codes:
  </p>
  <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6">
    <li>Always read the terms and conditions — some require a minimum order value.</li>
    <li>Look for stacking opportunities by combining coupons with bank cashback offers.</li>
    <li>Apply coupons early — many deals have limited redemptions and expire quickly.</li>
  </ul>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    Common Mistakes to Avoid
  </h2>
  <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 mb-6">
    <li>Forgetting to apply the coupon at checkout.</li>
    <li>Assuming one platform is always cheapest — prices change daily.</li>
    <li>Ignoring delivery charges, which can cancel out small discounts.</li>
  </ul>

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4">
    Final Thoughts
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    Pharmacy discount coupons can make a noticeable difference to your monthly healthcare budget.
    By checking prices and coupons side by side on <a href="https://medibachat.in/" target="_blank" style={{color:'blue'}}><b>MediBachat</b></a>,
    you ensure you never overpay for medicines. In 2025, saving on healthcare is all about being informed,
    quick, and strategic — and a little bit of smart couponing can go a long way.
  </p>
</>

    },
    // "3": {
    //   title: "How to Use Medicine Price Comparison Tools",
    //   author: "MediBachat Team",
    //   date: "March 10, 2024",
    //   readTime: "3 min read",
    //   category: "Guide",
    //   image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&h=400&fit=crop&crop=center",
    //   content: `
    //     <p>Medicine price comparison tools can help you save significant money on prescriptions. Here's a comprehensive guide on how to use these tools effectively.</p>
        
    //     <h3>Getting Started</h3>
    //     <p>Most price comparison tools require basic information about your prescription: the medication name, dosage, quantity, and your location.</p>
        
    //     <h3>Step-by-Step Guide</h3>
    //     <ol>
    //     <li><strong>Enter Medication Details:</strong> Type in the exact name of your medication</li>
    //     <li><strong>Select Dosage:</strong> Choose the correct strength (mg) prescribed by your doctor</li>
    //     <li><strong>Enter Quantity:</strong> Input the number of pills or amount prescribed</li>
    //     <li><strong>Set Location:</strong> Enter your ZIP code to find nearby pharmacies</li>
    //     <li><strong>Compare Results:</strong> Review prices from different pharmacies</li>
    //     </ol>
        
    //     <h3>What to Look For</h3>
    //     <ul>
    //     <li><strong>Total Cost:</strong> Some tools show per-pill costs, others show total cost</li>
    //     <li><strong>Insurance Coverage:</strong> Check if the tool factors in your insurance</li>
    //     <li><strong>Discounts Available:</strong> Look for additional coupon opportunities</li>
    //     <li><strong>Pharmacy Distance:</strong> Consider travel costs and convenience</li>
    //     </ul>
        
    //     <h3>Pro Tips</h3>
    //     <ul>
    //     <li>Compare both generic and brand name options</li>
    //     <li>Check multiple tools for the most comprehensive results</li>
    //     <li>Consider 90-day supplies for maintenance medications</li>
    //     <li>Don't forget to factor in gas and time costs</li>
    //     </ul>
        
    //     <h3>Beyond Price</h3>
    //     <p>While price is important, also consider pharmacy services, hours of operation, and customer service quality when making your decision.</p>
        
    //     <p><strong>Remember:</strong> Using price comparison tools regularly can save you hundreds of dollars annually on prescription medications.</p>
    //   `
    // },
    // "4": {
    //   title: "Medicine Storage Best Practices",
    //   author: "Dr. Priya Sharma",
    //   date: "March 8, 2024",
    //   readTime: "4 min read",
    //   category: "Safety",
    //   image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=400&fit=crop&crop=center",
    //   content: `
    //     <p>Proper medication storage is crucial for maintaining drug effectiveness and ensuring your safety. Here are essential best practices for storing your medicines.</p>
        
    //     <h3>General Storage Guidelines</h3>
    //     <p>Most medications should be stored in a cool, dry place away from direct sunlight and moisture. Room temperature (68-77°F) is ideal for most drugs.</p>
        
    //     <h3>Common Storage Mistakes</h3>
    //     <ul>
    //     <li><strong>Bathroom Medicine Cabinets:</strong> Heat and humidity can damage medications</li>
    //     <li><strong>Car Storage:</strong> Extreme temperatures can render medicines ineffective</li>
    //     <li><strong>Kitchen Counters:</strong> Heat from cooking can affect drug stability</li>
    //     <li><strong>Refrigerator Door:</strong> Temperature fluctuations occur here frequently</li>
    //     </ul>
        
    //     <h3>Refrigerated Medications</h3>
    //     <p>Some medications require refrigeration (36-46°F). Store these in the main body of the refrigerator, never in the freezer or door compartments.</p>
        
    //     <h3>Special Considerations</h3>
    //     <ul>
    //     <li><strong>Light-Sensitive Drugs:</strong> Keep in original dark containers</li>
    //     <li><strong>Inhalers:</strong> Store at room temperature, never in extreme heat or cold</li>
    //     <li><strong>Insulin:</strong> Unopened vials in refrigerator, opened vials at room temperature</li>
    //     <li><strong>Liquid Medications:</strong> Check for specific storage instructions</li>
    //     </ul>
        
    //     <h3>Safety Tips</h3>
    //     <ul>
    //     <li>Keep medications in original containers with labels</li>
    //     <li>Store out of reach of children and pets</li>
    //     <li>Use child-resistant caps when available</li>
    //     <li>Never mix different medications in the same container</li>
    //     </ul>
        
    //     <h3>Signs of Deterioration</h3>
    //     <p>Watch for changes in color, smell, texture, or expiration dates. When in doubt, consult your pharmacist before taking any medication that seems different.</p>
        
    //     <h3>Travel Storage</h3>
    //     <p>When traveling, keep medications in carry-on luggage, maintain proper temperatures, and bring extra supplies in case of delays.</p>
        
    //     <p><strong>Remember:</strong> Proper storage ensures your medications work as intended and keeps you safe from potential harm.</p>
    //   `
    // },
    // "5": {
    //   title: "Digital Health: The Future of Medicine Shopping",
    //   author: "Tech Health Team",
    //   date: "March 5, 2024",
    //   readTime: "6 min read",
    //   category: "Technology",
    //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop&crop=center",
    //   content: `
    //     <p>The digital revolution is transforming how we purchase and manage medications. From online pharmacies to AI-powered health assistants, technology is making healthcare more accessible and affordable.</p>
        
    //     <h3>Current Digital Health Trends</h3>
    //     <ul>
    //     <li><strong>Online Pharmacies:</strong> Convenient prescription delivery services</li>
    //     <li><strong>Price Comparison Apps:</strong> Real-time pricing across multiple pharmacies</li>
    //     <li><strong>Digital Prescriptions:</strong> Electronic prescribing reduces errors</li>
    //     <li><strong>Medication Reminders:</strong> Smart apps ensure adherence</li>
    //     </ul>
        
    //     <h3>Benefits of Digital Medicine Shopping</h3>
    //     <p>Digital platforms offer transparency in pricing, convenience of home delivery, and access to a wider range of medications and pharmacies.</p>
        
    //     <h3>AI and Machine Learning</h3>
    //     <p>Artificial intelligence is being used to predict drug interactions, optimize treatment plans, and provide personalized health recommendations.</p>
        
    //     <h3>Telemedicine Integration</h3>
    //     <p>The integration of telemedicine with digital pharmacies creates a seamless healthcare experience from consultation to medication delivery.</p>
        
    //     <h3>Security and Privacy</h3>
    //     <p>Digital health platforms employ advanced encryption and security measures to protect patient data and ensure HIPAA compliance.</p>
        
    //     <h3>What's Coming Next?</h3>
    //     <ul>
    //     <li><strong>Blockchain:</strong> Secure, transparent drug supply chains</li>
    //     <li><strong>IoT Devices:</strong> Smart pill bottles and adherence monitoring</li>
    //     <li><strong>Personalized Medicine:</strong> Treatments based on genetic profiles</li>
    //     <li><strong>Predictive Analytics:</strong> Anticipating health needs before symptoms appear</li>
    //     </ul>
        
    //     <h3>Challenges to Consider</h3>
    //     <p>While digital health offers many benefits, challenges include regulatory compliance, digital divide issues, and the need for healthcare provider adoption.</p>
        
    //     <p><strong>The Future is Now:</strong> Digital health tools are already making healthcare more accessible, affordable, and personalized for millions of people worldwide.</p>
    //   `
    // },
    // "6": {
    //   title: "Common Medicine Side Effects and How to Manage Them",
    //   author: "Dr. Amanda Rodriguez",
    //   date: "March 3, 2024",
    //   readTime: "7 min read",
    //   category: "Health Tips",
    //   image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop&crop=center",
    //   content: `
    //     <p>Understanding and managing medication side effects is an important part of your healthcare journey. Here's what you need to know about common side effects and how to handle them.</p>
        
    //     <h3>Most Common Side Effects</h3>
    //     <ul>
    //     <li><strong>Gastrointestinal:</strong> Nausea, stomach upset, diarrhea</li>
    //     <li><strong>Neurological:</strong> Dizziness, drowsiness, headaches</li>
    //     <li><strong>Dermatological:</strong> Skin rashes, itching, sensitivity</li>
    //     <li><strong>Cardiovascular:</strong> Changes in heart rate or blood pressure</li>
    //     </ul>
        
    //     <h3>Managing Gastrointestinal Side Effects</h3>
    //     <p>Take medications with food when possible, stay hydrated, and consider probiotics to maintain gut health. Avoid alcohol and spicy foods.</p>
        
    //     <h3>Dealing with Drowsiness and Dizziness</h3>
    //     <p>Take medications at bedtime when possible, avoid driving or operating machinery, and get up slowly from sitting or lying positions.</p>
        
    //     <h3>Skin Reactions</h3>
    //     <p>Use gentle, fragrance-free skincare products, apply moisturizer regularly, and protect skin from sun exposure. Report severe reactions immediately.</p>
        
    //     <h3>When to Contact Your Doctor</h3>
    //     <ul>
    //     <li>Severe allergic reactions (difficulty breathing, swelling)</li>
    //     <li>Persistent or worsening side effects</li>
    //     <li>New symptoms that concern you</li>
    //     <li>Side effects that interfere with daily activities</li>
    //     </ul>
        
    //     <h3>Prevention Strategies</h3>
    //     <ul>
    //     <li>Follow dosing instructions exactly</li>
    //     <li>Don't skip doses or stop medications suddenly</li>
    //     <li>Inform doctors about all medications you're taking</li>
    //     <li>Keep a side effect diary</li>
    //     </ul>
        
    //     <h3>Alternative Options</h3>
    //     <p>If side effects are problematic, your doctor may adjust dosages, change timing, or switch to alternative medications with better tolerance profiles.</p>
        
    //     <h3>The Risk-Benefit Balance</h3>
    //     <p>Remember that medications are prescribed because the benefits outweigh the risks. Work with your healthcare team to find the best balance for your situation.</p>
        
    //     <p><strong>Important:</strong> Never stop taking prescribed medications without consulting your healthcare provider, even if you experience side effects.</p>
    //   `
    // }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/">
            <Button className="dark:text-white">Return to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "health tips":
        return "bg-gradient-to-r from-green-100 to-green-200 text-green-800 dark:from-green-900/20 dark:to-green-800/20 dark:text-green-300";
      case "education":
        return "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-900/20 dark:to-blue-800/20 dark:text-blue-300";
      case "guide":
        return "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 dark:from-purple-900/20 dark:to-purple-800/20 dark:text-purple-300";
      case "safety":
        return "bg-gradient-to-r from-red-100 to-red-200 text-red-800 dark:from-red-900/20 dark:to-red-800/20 dark:text-red-300";
      case "technology":
        return "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 dark:from-cyan-900/20 dark:to-cyan-800/20 dark:text-cyan-300";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 dark:from-gray-900/20 dark:to-gray-800/20 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen">

      {/* Add Helmet to set dynamic metadata */}
      <Helmet>
        <title>{post.title} | MediBachat</title>
        <meta name="description" content={post.metaDescription} />
        {/* Optional: Add Open Graph and Twitter Card tags for better social sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://www.medibachat.in/blog/${id}`} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <Badge className={`${getCategoryColor(post.category)} mb-4 dark:bg-red-600`}>
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/#blog">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
            
          >
            {post.content}
          </div>

          {/* Author Info */}
          <div className="border-t pt-8 mt-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary dark:from-blue-200 dark:to-blue-800 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{post.author}</h4>
                <p className="text-muted-foreground">Founder & Content Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;