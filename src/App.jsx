import React, { useState } from 'react';
import { 
  Home, 
  CreditCard, 
  TrendingUp, 
  Settings, 
  Receipt,
  Bell,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Coffee,
  Bus,
  Film,
  Wifi,
  AlertTriangle,
  CheckCircle,
  Edit,
  Lock,
  Unlock,
  PiggyBank,
  Target,
  Calendar,
  DollarSign,
  BarChart3,
  Zap,
  Plus,
  X,
  Menu
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [budgetTemplate, setBudgetTemplate] = useState({
    fastfood: 320,
    transport: 80,
    loisir: 150,
    abonnements: 40,
    epargne: 50,
    urgence: 30
  });
  const [customCategories, setCustomCategories] = useState([]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryAmount, setNewCategoryAmount] = useState(100);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data
  const transactions = [
    { id: 1, name: 'McDonald\'s', amount: -45, category: 'food', date: '15 Nov', icon: Coffee },
    { id: 2, name: 'Taxi Casablanca', amount: -30, category: 'transport', date: '15 Nov', icon: Bus },
    { id: 3, name: 'Netflix', amount: -99, category: 'subscription', date: '14 Nov', icon: Wifi, recurring: true },
    { id: 4, name: 'Cinéma Megarama', amount: -80, category: 'loisir', date: '14 Nov', icon: Film },
    { id: 5, name: 'Starbucks', amount: -65, category: 'food', date: '13 Nov', icon: Coffee },
    { id: 6, name: 'Bus CTM', amount: -15, category: 'transport', date: '13 Nov', icon: Bus },
  ];

  const subscriptions = [
    { id: 1, name: 'Netflix', amount: 99, nextBilling: '14 Dec', category: 'Entertainment' },
    { id: 2, name: 'Spotify', amount: 49, nextBilling: '20 Nov', category: 'Music' },
    { id: 3, name: 'IAM Mobile', amount: 129, nextBilling: '28 Nov', category: 'Telecom' },
  ];

  const spending = {
    food: { spent: 285, budget: 320, color: 'bg-orange-500' },
    transport: { spent: 72, budget: 80, color: 'bg-blue-500' },
    loisir: { spent: 145, budget: 150, color: 'bg-purple-500' },
    abonnements: { spent: 40, budget: 40, color: 'bg-pink-500' },
  };

  const aiOptimization = {
    current: 670,
    optimized: 590,
    savings: 80,
    recommendations: [
      { category: 'FastFood', current: 320, suggested: 220, saved: 100 },
      { category: 'Loisir', current: 150, suggested: 120, saved: 30 },
      { category: 'Transport', current: 80, suggested: 60, saved: 20, tip: 'Utilise le bus plus souvent' },
    ]
  };

  const addCustomCategory = () => {
    if (newCategoryName.trim()) {
      setCustomCategories([...customCategories, {
        id: Date.now(),
        name: newCategoryName,
        amount: newCategoryAmount
      }]);
      setNewCategoryName('');
      setNewCategoryAmount(100);
      setShowAddCategory(false);
    }
  };

  const removeCustomCategory = (id) => {
    setCustomCategories(customCategories.filter(cat => cat.id !== id));
  };

  // Pages
  const OnboardingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-blue-500 flex items-center justify-center p-8">
      <div className="text-center text-white max-w-4xl">
        <div className="mb-12">
          <div className="w-32 h-32 bg-white rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <PiggyBank className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-6xl font-bold mb-4">BudgetBuddy+</h1>
          <p className="text-2xl opacity-90">Ton coach budgétaire intelligent</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-left">
            <Sparkles className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-xl mb-2">IA Proactive</h3>
            <p className="text-base opacity-90">Optimise automatiquement tes dépenses</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-left">
            <Bell className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Alertes Intelligentes</h3>
            <p className="text-base opacity-90">Sois averti avant de dépasser</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-left">
            <Lock className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Blocage Smart</h3>
            <p className="text-base opacity-90">Protection automatique de ton budget</p>
          </div>
        </div>

        <button 
          onClick={() => setCurrentPage('dashboard')}
          className="bg-white text-orange-500 font-bold py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-lg"
        >
          Commencer maintenant
        </button>
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white p-8 rounded-3xl shadow-lg mb-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-lg opacity-90">Bonjour,</p>
            <h2 className="text-4xl font-bold">Mehdi 👋</h2>
          </div>
          <button className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6">
            <p className="text-base opacity-90 mb-2">Solde disponible</p>
            <h3 className="text-4xl font-bold mb-6">2,450 MAD</h3>
            <div className="flex gap-3">
              <button className="flex-1 bg-white text-orange-500 py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <ArrowUpRight className="w-5 h-5" />
                Envoyer
              </button>
              <button className="flex-1 bg-white/20 backdrop-blur text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <ArrowDownRight className="w-5 h-5" />
                Recevoir
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white p-6 rounded-2xl">
              <PiggyBank className="w-8 h-8 mb-3 opacity-80" />
              <p className="text-sm opacity-90">Épargne</p>
              <p className="text-3xl font-bold">{budgetTemplate.epargne} MAD</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-400 text-white p-6 rounded-2xl">
              <Target className="w-8 h-8 mb-3 opacity-80" />
              <p className="text-sm opacity-90">Budget restant</p>
              <p className="text-3xl font-bold">385 MAD</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Insight Card */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-orange-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-xl mb-2">IA Suggestion</h4>
                <p className="text-base text-gray-600 mb-3">Tu peux économiser 80 MAD ce mois en optimisant tes dépenses food et loisir!</p>
                <button 
                  onClick={() => setCurrentPage('ai-optimization')}
                  className="text-orange-500 font-semibold text-base flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Voir le plan <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Spending Overview */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800 text-2xl">Dépenses par catégorie</h3>
              <button 
                onClick={() => setCurrentPage('expenses')}
                className="text-orange-500 text-base font-semibold hover:underline"
              >
                Voir tout
              </button>
            </div>
            
            <div className="space-y-4">
              {Object.entries(spending).map(([key, data]) => {
                const percentage = (data.spent / data.budget) * 100;
                const isWarning = percentage > 80;
                
                return (
                  <div key={key} className="bg-gray-50 rounded-xl p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold capitalize text-gray-800 text-lg">{key}</span>
                      <span className="text-base text-gray-600">{data.spent}/{data.budget} MAD</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${data.color} ${isWarning ? 'animate-pulse' : ''} transition-all`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    {isWarning && (
                      <p className="text-sm text-orange-500 mt-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Attention! Limite bientôt atteinte
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Recent Transactions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 text-2xl mb-4">Transactions récentes</h3>
            <div className="space-y-3">
              {transactions.slice(0, 6).map(tx => {
                const Icon = tx.icon;
                return (
                  <div key={tx.id} className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                    <div className={`w-12 h-12 ${tx.recurring ? 'bg-pink-100' : 'bg-gray-200'} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${tx.recurring ? 'text-pink-500' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-800 text-sm truncate">{tx.name}</p>
                        {tx.recurring && (
                          <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                            Récurrent
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{tx.date}</p>
                    </div>
                    <p className="font-bold text-gray-800 whitespace-nowrap">{tx.amount} MAD</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ExpensesPage = () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white p-8 rounded-3xl shadow-lg mb-8">
        <h2 className="text-4xl font-bold mb-2">Dépenses</h2>
        <p className="text-lg opacity-90">Novembre 2025</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-bold text-gray-800 text-xl mb-4">Total dépensé</h3>
          <p className="text-5xl font-bold text-gray-800 mb-3">542 MAD</p>
          <p className="text-base text-gray-600 mb-6">Sur 670 MAD budgétés</p>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: '80%' }} />
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-bold text-gray-800 text-2xl mb-6">Toutes les transactions</h3>
          <div className="space-y-3">
            {transactions.map(tx => {
              const Icon = tx.icon;
              return (
                <div key={tx.id} className="bg-gray-50 rounded-xl p-5 flex items-center gap-4">
                  <div className={`w-14 h-14 ${tx.recurring ? 'bg-pink-100' : 'bg-gray-200'} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${tx.recurring ? 'text-pink-500' : 'text-gray-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold text-gray-800 text-lg">{tx.name}</p>
                      {tx.recurring && (
                        <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-semibold">
                          Récurrent
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{tx.date} • {tx.category}</p>
                  </div>
                  <p className="font-bold text-xl text-gray-800">{tx.amount} MAD</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const SubscriptionsPage = () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-pink-500 to-pink-400 text-white p-8 rounded-3xl shadow-lg mb-8">
        <h2 className="text-4xl font-bold mb-2">Abonnements</h2>
        <p className="text-lg opacity-90">Suivi automatique</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Détection automatique</h4>
                <p className="text-sm text-gray-600">BudgetBuddy+ détecte automatiquement tes abonnements récurrents</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-gray-800 text-xl mb-2">Total mensuel</h3>
            <p className="text-5xl font-bold text-gray-800">277 MAD</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-bold text-gray-800 text-2xl mb-6">Mes abonnements</h3>
          <div className="space-y-4">
            {subscriptions.map(sub => (
              <div key={sub.id} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-7 h-7 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-xl">{sub.name}</p>
                    <p className="text-base text-gray-600">{sub.category}</p>
                  </div>
                  <p className="font-bold text-gray-800 text-xl">{sub.amount} MAD</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <p className="text-sm text-gray-600">Prochain prélèvement: {sub.nextBilling}</p>
                </div>
                {sub.nextBilling === '20 Nov' && (
                  <div className="mt-3 bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center gap-3">
                    <Bell className="w-5 h-5 text-orange-500" />
                    <p className="text-sm text-orange-600 font-semibold">Prélèvement dans 5 jours!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const BudgetTemplatePage = () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-purple-500 to-purple-400 text-white p-8 rounded-3xl shadow-lg mb-8">
        <h2 className="text-4xl font-bold mb-2">Template Budget</h2>
        <p className="text-lg opacity-90">Personnalise ton budget mensuel</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-bold text-gray-800 text-xl mb-3">Budget total</h3>
          <p className="text-5xl font-bold text-gray-800 mb-8">
            {Object.values(budgetTemplate).reduce((a, b) => a + b, 0) + customCategories.reduce((a, b) => a + b.amount, 0)} MAD
          </p>
          
          <button 
            onClick={() => setShowAddCategory(true)}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-400 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all"
          >
            <Plus className="w-5 h-5" />
            Ajouter une catégorie
          </button>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-gray-800 text-2xl mb-6">Catégories par défaut</h3>
            <div className="space-y-5">
              {Object.entries(budgetTemplate).map(([key, value]) => (
                <div key={key} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-gray-800 capitalize text-lg">{key}</span>
                    <span className="text-2xl font-bold text-gray-800">{value} MAD</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={value}
                    onChange={(e) => setBudgetTemplate({...budgetTemplate, [key]: parseInt(e.target.value)})}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {customCategories.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-gray-800 text-2xl mb-6">Catégories personnalisées</h3>
              <div className="space-y-5">
                {customCategories.map(cat => (
                  <div key={cat.id} className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-gray-800 capitalize text-lg">{cat.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-800">{cat.amount} MAD</span>
                        <button 
                          onClick={() => removeCustomCategory(cat.id)}
                          className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={cat.amount}
                      onChange={(e) => {
                        setCustomCategories(customCategories.map(c => 
                          c.id === cat.id ? {...c, amount: parseInt(e.target.value)} : c
                        ));
                      }}
                      className="w-full h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className="w-full bg-gradient-to-r from-purple-500 to-purple-400 text-white font-bold py-5 rounded-2xl shadow-lg text-lg hover:shadow-xl transition-all">
            Sauvegarder le template
          </button>
        </div>
      </div>

      {/* Add Category Modal */}
      {showAddCategory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Nouvelle catégorie</h3>
              <button 
                onClick={() => setShowAddCategory(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom de la catégorie</label>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="Ex: Shopping, Santé, etc."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget mensuel</label>
                <div className="bg-gray-50 rounded-xl p-4 mb-3">
                  <span className="text-3xl font-bold text-gray-800">{newCategoryAmount} MAD</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={newCategoryAmount}
                  onChange={(e) => setNewCategoryAmount(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button 
                onClick={() => setShowAddCategory(false)}
                className="flex-1 bg-gray-100 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button 
                onClick={addCustomCategory}
                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-400 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const AIOptimizationPage = () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white p-8 rounded-3xl shadow-lg mb-8">
        <div className="flex items-center gap-4 mb-3">
          <Sparkles className="w-10 h-10" />
          <h2 className="text-4xl font-bold">IA Optimization</h2>
        </div>
        <p className="text-lg opacity-90">Plan personnalisé pour économiser</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <p className="text-base opacity-90">Économies potentielles</p>
              <p className="text-4xl font-bold">{aiOptimization.savings} MAD/mois</p>
            </div>
          </div>
          <div className="flex gap-6 text-base">
            <div>
              <p className="opacity-75 mb-1">Actuel</p>
              <p className="font-bold text-xl">{aiOptimization.current} MAD</p>
            </div>
            <div className="flex items-center text-2xl">→</div>
            <div>
              <p className="opacity-75 mb-1">Optimisé</p>
              <p className="font-bold text-xl">{aiOptimization.optimized} MAD</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-bold text-gray-800 text-2xl mb-6">Recommandations IA</h3>
          <div className="space-y-4">
            {aiOptimization.recommendations.map((rec, idx) => (
              <div key={idx} className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-xl mb-3">{rec.category}</h4>
                    <div className="flex items-center gap-3 text-base text-gray-600 mb-3">
                      <span className="font-semibold">{rec.current} MAD</span>
                      <span>→</span>
                      <span className="font-bold text-orange-500">{rec.suggested} MAD</span>
                    </div>
                    {rec.tip && (
                      <p className="text-sm text-gray-600 bg-white rounded-lg p-3 mb-3">💡 {rec.tip}</p>
                    )}
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-base font-semibold text-green-600">+{rec.saved} MAD économisés</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-5 rounded-2xl shadow-lg text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all">
            <Sparkles className="w-6 h-6" />
            Appliquer le plan IA
          </button>
        </div>
      </div>
    </div>
  );

  const SettingsPage = () => (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white p-8 rounded-3xl shadow-lg mb-8">
        <h2 className="text-4xl font-bold mb-2">Paramètres</h2>
        <p className="text-lg opacity-90">Gère ton compte et préférences</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4">
              <PiggyBank className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-gray-800 text-lg">Cash-in automatique</span>
            </div>
            <button
              onClick={() => setAutoSaveEnabled(!autoSaveEnabled)}
              className={`w-16 h-9 rounded-full transition-colors ${
                autoSaveEnabled ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <div className={`w-7 h-7 bg-white rounded-full shadow-md transition-transform ${
                autoSaveEnabled ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
          </div>
          {autoSaveEnabled && (
            <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-600">
              Épargne automatique quand le solde dépasse 30 MAD
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Lock className="w-6 h-6 text-orange-500" />
              <span className="font-semibold text-gray-800 text-lg">Blocage intelligent</span>
            </div>
            <button className="w-16 h-9 rounded-full bg-orange-500">
              <div className="w-7 h-7 bg-white rounded-full shadow-md translate-x-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100 mt-6">
        <button className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="font-semibold text-gray-800 text-lg">Notifications</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <Lock className="w-6 h-6 text-gray-600" />
            <span className="font-semibold text-gray-800 text-lg">Sécurité</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <Sparkles className="w-6 h-6 text-gray-600" />
            <span className="font-semibold text-gray-800 text-lg">Support</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );

  // Navigation
  const navigation = [
    { id: 'dashboard', label: 'Accueil', icon: Home },
    { id: 'expenses', label: 'Dépenses', icon: Receipt },
    { id: 'ai-optimization', label: 'IA Optimization', icon: Sparkles },
    { id: 'subscriptions', label: 'Abonnements', icon: Wifi },
    { id: 'budget-template', label: 'Budget', icon: Target },
    { id: 'settings', label: 'Réglages', icon: Settings },
  ];

  const renderPage = () => {
    if (currentPage === 'onboarding') return <OnboardingPage />;
    if (currentPage === 'dashboard') return <DashboardPage />;
    if (currentPage === 'expenses') return <ExpensesPage />;
    if (currentPage === 'subscriptions') return <SubscriptionsPage />;
    if (currentPage === 'budget-template') return <BudgetTemplatePage />;
    if (currentPage === 'ai-optimization') return <AIOptimizationPage />;
    if (currentPage === 'settings') return <SettingsPage />;
    return <DashboardPage />;
  };

  if (currentPage === 'onboarding') {
    return <OnboardingPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                <PiggyBank className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                BudgetBuddy+
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navigation.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>

            {/* User Profile */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden" onClick={() => setSidebarOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Menu</h3>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="space-y-2">
              {navigation.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl font-semibold transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-lg">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="min-h-screen">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
